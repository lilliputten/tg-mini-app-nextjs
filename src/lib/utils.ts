import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
// import { routing } from '@/i18n/routing';
// import { TLocale } from '@/i18n/types';
import { ClassValue, clsx } from 'clsx';
// import ms from 'ms';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Create oath and other meta data tags */
export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  // image = siteConfig.ogImage,
  // icons = '/favicon.ico',
  // noIndex = false,
  // locale = routing.defaultLocale as TLocale,
  // url = siteConfig.url,
}: {
  title?: string;
  description?: string;
  // image?: string;
  // icons?: string;
  // noIndex?: boolean;
  // locale?: TLocale;
  // url?: string;
} = {}): Metadata {
  return {
    title,
    description,
    keywords: [
      // ...
      'Next.js',
    ],
    authors: [
      {
        name: 'lilliputten',
      },
    ],
    creator: 'lilliputten',
    openGraph: {
      type: 'website',
      // locale, // 'en',
      // url,
      title,
      description,
      siteName: title,
      // images: [image],
    },
    // twitter: {
    //   card: 'summary_large_image',
    //   title,
    //   description,
    //   images: [image],
    //   creator: '@lilliputten',
    // },
    // icons,
    // metadataBase: new URL(url),
    // manifest: `${url}/site.webmanifest`,
    // ...(noIndex && {
    //   robots: {
    //     index: false,
    //     follow: false,
    //   },
    // }),
  };
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

// export function absoluteUrl(path: string) {
//   return `${siteConfig.url}${path}`;
// }

// Utils from precedent.dev
export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) {
    return 'never';
  }
  return `${ms(Date.now() - new Date(timestamp).getTime())}${timeOnly ? '' : ' ago'}`;
};

export async function fetcher<JSON = unknown>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetch(input, init);

  if (!res.ok) {
    const json = await res.json();
    if (json.error) {
      const error = new Error(json.error) as Error & {
        status: number;
      };
      error.status = res.status;
      throw error;
    } else {
      throw new Error('An unexpected error occurred');
    }
  }

  return res.json();
}

export function nFormatter(num: number, digits?: number) {
  if (!num) {
    return '0';
  }
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item ? (num / item.value).toFixed(digits || 1).replace(rx, '$1') + item.symbol : '0';
}

export function capitalize(str: string) {
  if (!str || typeof str !== 'string') {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const truncate = (str: string, length: number) => {
  if (!str || str.length <= length) {
    return str;
  }
  return `${str.slice(0, length)}...`;
};
