import BlogPost, { generateMetadata as baseGenerateMetadata, generateStaticParams as baseGenerateStaticParams } from '@/app/blog/[slug]/page';

export const generateMetadata = baseGenerateMetadata;
export const generateStaticParams = baseGenerateStaticParams;

export default BlogPost;
