import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Header/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <>
     
        <html lang="en" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </>
  )
}


 
