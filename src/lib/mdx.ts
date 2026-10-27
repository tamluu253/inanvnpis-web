import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BaseMetadata {
  title: string;
  description: string;
  date: string;
  slug: string;
  canonical?: string;
  author?: string;
  image?: string;
  category?: string;
  tags?: string[];
  faqs?: FaqItem[];
  [key: string]: any;
}

export interface MarkdownDocument<T = BaseMetadata> {
  metadata: T;
  contentHtml: string;
  contentMarkdown: string;
}

const contentDirectory = path.join(/*turbopackIgnore: true*/ process.cwd(), 'content');

function stripMarkdownToPlainText(md: string): string {
  return md
    .replace(/^#+\s+.*$/gm, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/^\|.*\|$/gm, '')
    .replace(/^[>\-*+]\s+/gm, '')
    .replace(/[*_`~]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function synthesizeDescription(data: Record<string, any>, markdownContent: string): string {
  const existing = typeof data.description === 'string' ? data.description.trim() : '';
  if (existing.length > 10) {
    return existing;
  }

  const title = typeof data.title === 'string' ? data.title.trim() : 'Giải pháp in ấn gia công công nghiệp VNPIS';
  const keywordsRaw = Array.isArray(data.keywords)
    ? data.keywords.slice(0, 2).join(', ')
    : typeof data.keywords === 'string'
    ? data.keywords.split(',').slice(0, 2).join(', ').trim()
    : '';

  const plainBody = stripMarkdownToPlainText(markdownContent);
  const firstSentenceMatch = plainBody.match(/[^.!?]+[.!?]/);
  const firstSentence = firstSentenceMatch ? firstSentenceMatch[0].trim() : plainBody.slice(0, 140).trim();

  let combined = firstSentence
    ? `${title}: ${firstSentence}`
    : keywordsRaw
    ? `${title} - Chuyên sâu về ${keywordsRaw} tại Xưởng In Ấn Gia Công VNPIS. Hỗ trợ test mẫu 3M miễn phí.`
    : `${title} - Giải pháp gia công in tampon, in lụa, in KTS dữ liệu biến đổi VDP chuẩn ISO tại Xưởng VNPIS.`;

  combined = combined.replace(/\s+/g, ' ').trim();
  if (combined.length <= 158) {
    return combined;
  }
  const truncated = combined.slice(0, 152);
  const lastSpace = truncated.lastIndexOf(' ');
  return (lastSpace > 100 ? truncated.slice(0, lastSpace) : truncated).replace(/[.,;:\-]+$/, '') + '...';
}

function buildCanonicalUrl(contentType: string, realSlug: string): string {
  const clean = realSlug.replace(/\.md$/, '').replace(/\.html$/, '');
  if (contentType === 'articles') {
    return `https://www.inanvnpis.com/blog/${clean}`;
  }
  if (contentType === 'case-studies') {
    return `https://www.inanvnpis.com/case-studies/${clean}`;
  }
  return `https://www.inanvnpis.com/${clean}`;
}

export function extractFaqsFromMarkdown(markdownContent: string): FaqItem[] {
  const faqs: FaqItem[] = [];
  const lines = markdownContent.split(/\r?\n/);
  let currentQuestion: string | null = null;
  let currentAnswerLines: string[] = [];

  const flushFaq = () => {
    if (currentQuestion && currentAnswerLines.length > 0) {
      const cleanAnswer = stripMarkdownToPlainText(currentAnswerLines.join(' '));
      if (cleanAnswer.length >= 15) {
        faqs.push({
          question: currentQuestion,
          answer: cleanAnswer,
        });
      }
    }
    currentQuestion = null;
    currentAnswerLines = [];
  };

  for (const line of lines) {
    const h3Match = line.match(/^###\s+(.+\?)\s*$/);
    if (h3Match) {
      flushFaq();
      const rawQ = h3Match[1]
        .replace(/^[❓❔💡🔹🔸•\-\d.)\s]+/, '')
        .replace(/^(Câu hỏi\s*\d*[:.]?\s*|Q\d*[:.]?\s*)/i, '')
        .replace(/[*_`~]/g, '')
        .trim();
      if (rawQ.length > 5) {
        currentQuestion = rawQ;
      }
      continue;
    }

    if (/^#{1,3}\s+/.test(line) || /^---+\s*$/.test(line)) {
      flushFaq();
      continue;
    }

    if (currentQuestion) {
      const trimmed = line.trim();
      if (trimmed) {
        const cleanedLine = trimmed.replace(/^(Trả lời|Đáp|A)[:.]\s*/i, '');
        currentAnswerLines.push(cleanedLine);
      }
    }
  }
  flushFaq();

  return faqs;
}

/**
 * Lấy tất cả các file markdown trong một thư mục cụ thể (vd: 'pillars', 'articles')
 */
export function getAllSlugs(contentType: string): string[] {
  const dirPath = path.join(contentDirectory, contentType);
  
  if (!fs.existsSync(dirPath)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(dirPath);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

export function getDocumentMetadataBySlug<T = BaseMetadata>(
  contentType: string,
  slug: string
): T | null {
  const cleanSlug = slug.replace(/\.md$/, '').replace(/\.html$/, '');
  let fullPath = path.join(contentDirectory, contentType, `${cleanSlug}.md`);
  let resolvedType = contentType;
  
  if (!fs.existsSync(fullPath)) {
    const candidates: { type: string; file: string }[] = [
      { type: 'articles', file: path.join(contentDirectory, 'articles', `${cleanSlug}.md`) },
      { type: 'pillars', file: path.join(contentDirectory, 'pillars', `${cleanSlug}.md`) },
      { type: 'case-studies', file: path.join(contentDirectory, 'case-studies', `${cleanSlug}.md`) },
      { type: contentType, file: path.join(contentDirectory, `${cleanSlug}.md`) },
    ];
    const found = candidates.find(c => fs.existsSync(c.file));
    if (!found) return null;
    fullPath = found.file;
    resolvedType = found.type;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const data = matterResult.data as Record<string, any>;
  const description = synthesizeDescription(data, matterResult.content);
  const canonical = buildCanonicalUrl(resolvedType, cleanSlug);
  const faqs = extractFaqsFromMarkdown(matterResult.content);

  return {
    ...(data as Omit<T, 'slug'>),
    slug: cleanSlug,
    description,
    canonical,
    faqs,
  } as unknown as T;
}

/**
 * Đọc nội dung và metadata của một file markdown cụ thể
 */
export async function getDocumentBySlug<T = BaseMetadata>(
  contentType: string,
  slug: string
): Promise<MarkdownDocument<T> | null> {
  const cleanSlug = slug.replace(/\.md$/, '').replace(/\.html$/, '');
  
  let fullPath = path.join(contentDirectory, contentType, `${cleanSlug}.md`);
  let resolvedType = contentType;
  
  if (!fs.existsSync(fullPath)) {
    const candidates: { type: string; file: string }[] = [
      { type: 'articles', file: path.join(contentDirectory, 'articles', `${cleanSlug}.md`) },
      { type: 'pillars', file: path.join(contentDirectory, 'pillars', `${cleanSlug}.md`) },
      { type: 'case-studies', file: path.join(contentDirectory, 'case-studies', `${cleanSlug}.md`) },
      { type: contentType, file: path.join(contentDirectory, `${cleanSlug}.md`) },
    ];
    const found = candidates.find(c => fs.existsSync(c.file));
    if (!found) {
      return null;
    }
    fullPath = found.file;
    resolvedType = found.type;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // Dùng gray-matter để parse phần frontmatter và content
  const matterResult = matter(fileContents);
  const data = matterResult.data as Record<string, any>;
  
  // Dùng remark để convert markdown sang HTML
  const processedContent = await remark()
    .use(html, { sanitize: false }) // Disable sanitize để cho phép render HTML nhúng nếu cần
    .process(matterResult.content);
    
  let contentHtml = processedContent.toString();

  // Demote any <h1> in markdown content to <h2> (or strip leading <h1> if it duplicates frontmatter title)
  const rawTitle = String(data?.title || '').trim().toLowerCase();
  contentHtml = contentHtml.replace(/<h1([^>]*)>([\s\S]*?)<\/h1>/gi, (_match, attrs, inner, offset) => {
    const plainInner = String(inner).replace(/<[^>]+>/g, '').trim().toLowerCase();
    if (offset < 50 && rawTitle && (plainInner === rawTitle || rawTitle.includes(plainInner))) {
      return '';
    }
    return `<h2${attrs}>${inner}</h2>`;
  });
  
  let mediaExt: string | null = null;
  const mediaDir = path.join(process.cwd(), 'public', 'media', 'blog');
  if (fs.existsSync(path.join(mediaDir, `${cleanSlug}.jpg`))) mediaExt = 'jpg';
  else if (fs.existsSync(path.join(mediaDir, `${cleanSlug}.png`))) mediaExt = 'png';
  else if (fs.existsSync(path.join(mediaDir, `${cleanSlug}.mp4`))) mediaExt = 'mp4';

  const description = synthesizeDescription(data, matterResult.content);
  const canonical = buildCanonicalUrl(resolvedType, cleanSlug);
  const faqs = extractFaqsFromMarkdown(matterResult.content);

  return {
    metadata: {
      ...(data as Omit<T, 'slug'>),
      slug: cleanSlug,
      mediaExt,
      description,
      canonical,
      faqs,
    } as unknown as T,
    contentHtml,
    contentMarkdown: matterResult.content,
  };
}

/**
 * Lấy danh sách tất cả documents của một loại (để làm trang danh sách)
 */
export function getAllDocumentsMeta<T = BaseMetadata>(contentType: string): T[] {
  const slugs = getAllSlugs(contentType);
  
  const documents = slugs
    .map((slug) => {
      const fullPath = path.join(contentDirectory, contentType, `${slug}.md`);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);
      const data = matterResult.data as Record<string, any>;

      if (data.draft === true || data.status === 'draft') {
        return null;
      }
      
      let mediaExt: string | null = null;
      const mediaDir = path.join(process.cwd(), 'public', 'media', 'blog');
      if (fs.existsSync(path.join(mediaDir, `${slug}.jpg`))) mediaExt = 'jpg';
      else if (fs.existsSync(path.join(mediaDir, `${slug}.png`))) mediaExt = 'png';
      else if (fs.existsSync(path.join(mediaDir, `${slug}.mp4`))) mediaExt = 'mp4';

      const description = synthesizeDescription(data, matterResult.content);
      const canonical = buildCanonicalUrl(contentType, slug);

      return {
        ...(data as Omit<T, 'slug'>),
        slug,
        mediaExt,
        description,
        canonical,
      } as unknown as T;
    })
    .filter((doc): doc is T => doc !== null);
  
  // Sắp xếp theo ngày giảm dần (mới nhất lên trước)
  return documents.sort((a, b) => {
    if ((a as any).date < (b as any).date) {
      return 1;
    } else {
      return -1;
    }
  });
}
