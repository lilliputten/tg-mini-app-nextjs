import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/core/i18n/i18n.ts');

const nextConfig: NextConfig = {
  serverExternalPackages: ['grammy'],
  compress: false, // In favor of xtunnel (it loses `gzip` header)
};

export default withNextIntl(nextConfig);
