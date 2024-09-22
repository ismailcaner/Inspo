import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  return (
    <Html lang="en">
      <meta charset="utf-8" />
      <title>Inspo</title>
      <link rel="preconnect" href="https://v5.airtableusercontent.com"></link>
      <meta name="description" content="Discover beautifully designed minimalist products from around the world." />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://inspov1.vercel.app/" />
      <meta property="og:title" content="Inspo" />
      <meta property="og:description" content="Discover beautifully designed minimalist products from around the world." />
      <meta property="og:url" content="https://inspov1.vercel.app/" />
      <meta property="og:site_name" content="Inspo" />
      <meta property="og:locale" content="en_IE" />
      <meta property="og:image" content="https://inspov1.vercel.app/images/og.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content="Inspo" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Inspo" />
      <meta name="twitter:description" content="Discover beautifully designed minimalist products from around the world." />
      <meta name="twitter:image" content="https://inspov1.vercel.app/images/og.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Head />
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}
