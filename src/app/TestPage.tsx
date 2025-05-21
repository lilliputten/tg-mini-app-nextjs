import { siteConfig } from '@/config/site';
import { constructMetadata } from '@/lib/utils';
import { DemoList } from '@/components/debug/DemoList';

export const pageTitle = 'Test';
export const pageDescription = 'Test page';

export const metadata = constructMetadata({
  title: pageTitle + ' - ' + siteConfig.name,
  description: pageDescription,
});

console.log('[TestPage]', {
  NODE_ENV: process.env.NODE_ENV,
  VERCEL_URL: process.env.VERCEL_URL,
  WEBAPP_URL: process.env.WEBAPP_URL,
});

export async function TestPage() {
  return (
    <div>
      <div>Application: {siteConfig.versionInfo}</div>
      <DemoList count={50} />
    </div>
  );
}
