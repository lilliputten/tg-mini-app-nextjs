import appInfoModule from '@/app-info.json';

// const siteUrl = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: 'Mini App',
  description: 'Sample Next.js Vercel Telegram Mini App',
  versionInfo: appInfoModule.versionInfo,
  // url: siteUrl,
  // ogImage: `/static/opengraph-image-new.jpg`,
  // links: {
  //   website: siteUrl, // 'https://team-tree-app.vercel.app/',
  //   github: 'https://github.com/lilliputten/team-tree-app',
  // },
  // mailSupport: 'support@example.com',
};
