import { redirect } from 'next/navigation';

export default async function BaiVietRedirect({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  redirect(`/blog/${resolvedParams.slug}`);
}

