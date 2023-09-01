import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gabriel Nicolitoiu',
  description: 'Personal website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
