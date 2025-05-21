import { getLocale } from 'next-intl/server';

type TRootLayoutProps = {
  children: React.ReactNode;
};

async function RootLayout({ children }: TRootLayoutProps) {
  const locale = await getLocale();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        {/* Core content */}
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
