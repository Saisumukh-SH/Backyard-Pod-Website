import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

const SITE_URL = "https://backyardnest.com.au";

function getCanonicalUrl(pathname: string) {
  // Homepage
  if (pathname === "/") {
    return `${SITE_URL}/`;
  }

  // Remove trailing slash so we have one consistent URL format
  const cleanPath = pathname.replace(/\/+$/, "");

  return `${SITE_URL}${cleanPath}`;
}

export default function SEO({
  title,
  description,
  image = `${SITE_URL}/images/seo/og-image.jpg`,
  url,
}: SEOProps) {
  const canonicalUrl =
    url ||
    getCanonicalUrl(window.location.pathname);

  return (
    <Helmet>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      {/* Canonical */}
      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
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