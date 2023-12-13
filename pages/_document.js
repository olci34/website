import { Html, Head, Main, NextScript } from 'next/document'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* <ColorModeScript theme={theme.config.initialColorMode} /> */}
        <Main />
        <NextScript />
        <SpeedInsights />
        <Analytics />
      </body>
    </Html>
  )
}
