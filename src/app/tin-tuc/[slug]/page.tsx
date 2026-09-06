import { redirect } from 'next/navigation';

export default async function TinTucRedirect({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  redirect(`/blog/${resolvedParams.slug}`);
}

