import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'MyProFunnels - All-in-One Marketing Platform for Coaches',
  description:
    'An All-in-One Digital Marketing & Automation Tool with Chatbot & IVR for Your Coaching Business. Launch your courses with ease!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
