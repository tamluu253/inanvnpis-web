import { permanentRedirect } from 'next/navigation';

export default async function KienThucRedirect({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  permanentRedirect(`/blog/${resolvedParams.slug}`);
}
