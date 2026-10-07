import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  noIndex?: boolean;
}

const SITE_URL = "https://backyardnest.com.au";

function getCanonicalUrl(pathname: string) {
  // Homepage
  if (pathname === "/") {
    return `${SITE_URL}/`;
  }

  // Remove trailing slash
  const cleanPath = pathname.replace(/\/+$/, "");

  return `${SITE_URL}${cleanPath}`;
}

export default function SEO({
  title,
  description,
  image = `${SITE_URL}/images/seo/og-image.jpg`,
  url,
  noIndex = false,
}: SEOProps) {
  // If a URL is explicitly provided, use it.
  // Otherwise, automatically use the current page URL.
  const canonicalUrl =
    url || getCanonicalUrl(window.location.pathname);

  const robotsContent = noIndex
    ? "noindex, nofollow"
    : "index, follow";

  return (
    <Helmet>
      {/* ================================
          PRIMARY SEO
      ================================= */}

      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="robots"
        content={robotsContent}
      />

      {/* ================================
          CANONICAL
      ================================= */}

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* ================================
          OPEN GRAPH
      ================================= */}

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:image"
        content={image}
      />

      {/* ================================
          TWITTER
      ================================= */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={image}
      />
    </Helmet>
  );
}