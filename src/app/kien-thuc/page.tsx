export const dynamicParams = true;
import { permanentRedirect } from 'next/navigation';

export default function KienThucPage() {
  permanentRedirect('/blog');
}
