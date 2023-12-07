
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/_NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bridge Hop Application',
  description: 'Decentralizaed Exchange',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
  

      <body  >
        <main className='h-full flex flex-col gap-2'>
    <NavBar/>
    {children}
    </main>
        </body>
    </html>
  )
}
