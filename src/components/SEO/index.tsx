import Head from 'next/head';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  shouldExcludeTitleSuffix?: boolean;
  shouldIndexPage?: boolean;
}

export function SEO({
  title,
  description = "A melhor seleção de produtos digitais exclusivos.",
  image,
  shouldExcludeTitleSuffix = false,
  shouldIndexPage = true,
}: SEOProps) {
  const pageTitle = shouldExcludeTitleSuffix ? title : `${title} | MKS Sistemas`;
  const pageImage = image ? `${process.env.NEXT_PUBLIC_APP_URL}/${image}` : null;

  return (
    <Head>
      <title>{pageTitle}</title>

      {description && <meta name="description" content={description} />}
      {pageImage && <meta name="image" content={pageImage} />}

      {!shouldIndexPage && <meta name="robots" content="noindex,nofollow" />}

      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#0F52BA" />
      <meta name="msapplication-TileColor" content="#0F52BA" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="MKS Sistemas" />
      {pageImage && <meta property="og:image" content={pageImage} />}
      {pageImage && <meta property="og:image:secure_url" content={pageImage} />}
      {pageImage && <meta property="og:image:alt" content="Thumbnail" />}
      {pageImage && <meta property="og:image:type" content="image/png" />}
      {pageImage && <meta property="og:image:width" content="1200" />}
      {pageImage && <meta property="og:image:height" content="630" />}

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mks" />
      <meta name="twitter:creator" content="@mks" />
      {pageImage && <meta name="twitter:image" content={pageImage} />}
      {pageImage && <meta name="twitter:image:src" content={pageImage} />}
      {pageImage && <meta name="twitter:image:alt" content="Thumbnail" />}
      {pageImage && <meta name="twitter:image:width" content="1200" />}
      {pageImage && <meta name="twitter:image:height" content="620" />}
    </Head>
  );
}