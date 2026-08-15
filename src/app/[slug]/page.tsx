import { getPostBySlug, getAllPosts, markdownToHtml } from '@/lib/api'
import Head from 'next/head'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ArticleContactCTA from '@/components/ArticleContactCTA'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug, ['title', 'description'])

  if (!post) {
    return {
      title: 'Không tìm thấy trang | In Ấn VNPIS',
    }
  }

  return {
    title: `${post.title} | In Ấn VNPIS`,
    description: post.description || 'Giải pháp in ấn dữ liệu biến đổi và gia công hàng đầu TP.HCM',
  }
}

export default async function Post({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug, [
    'title',
    'date',
    'slug',
    'content',
  ])

  if (!post) {
    return notFound()
  }

  const content = await markdownToHtml(post.content || '')

  return (
    <article className="bg-slate-50 py-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-bold transition-colors text-sm">
            <ArrowLeft size={16} className="mr-2" /> Quay lại danh sách bài viết
          </Link>
        </div>
        
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </header>

        {/* Cấu hình style CSS cho nội dung bài viết HTML */}
        <div 
          className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-a:text-blue-600 prose-img:rounded-2xl prose-img:shadow-md mx-auto text-slate-700 leading-relaxed mb-12"
          dangerouslySetInnerHTML={{ __html: content }} 
        />

        {/* MID/END ARTICLE CTA BANNER FOR HOTLINE 0901 836 344 / ZALO / WHATSAPP */}
        <ArticleContactCTA title={post.title} />
      </div>
    </article>
  )
}

export async function generateStaticParams() {
  const posts = getAllPosts(['slug'])

  return posts.map((post: any) => ({
    slug: post.slug,
  }))
}
