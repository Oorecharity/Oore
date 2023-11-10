"use client"

import { Footer } from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import './globals.css'
import { Montserrat } from 'next/font/google'
import { useRouter } from 'next/navigation'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Oore',
  description: 'Oore aims to develop  versatile donation platform that allows donors to contribute to our charity’s cause with flexibility and convenience. The primary focus is on enabling donors to spread their donations across a period of time, offering them greater financial ease while making a lasting impact on our charity mission.',
}

export default function RootLayout({ children }) {
  const router = useRouter();

  return (
    <html lang="en">
      <body className={montserrat.className}>
        {router.pathname == "/dashboard" && <Navbar/>}
          {children}
        {router.pathname == "/dashboard" && <Footer />}
      </body>
    </html>
  )
}
