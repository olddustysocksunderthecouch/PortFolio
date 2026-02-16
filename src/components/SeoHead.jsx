import React from 'react'
import { Helmet } from 'react-helmet-async'
import { SEO_CONTENT, SITE_NAME, SITE_ORIGIN } from '../configs/seo-content'

export const SeoHead = ({ pageKey }) => {
  const metadata = SEO_CONTENT[pageKey]

  if (!metadata) {
    return null
  }

  const canonicalUrl = `${SITE_ORIGIN}${metadata.canonicalPath}`

  return (
    <Helmet>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.metaDescription} />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.ogDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={metadata.imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.ogDescription} />
      <meta name="twitter:image" content={metadata.imageUrl} />
    </Helmet>
  )
}
