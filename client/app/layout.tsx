import Image from 'next/image'
import { Outfit } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kika Mini Decora',
  description: 'XXXXXX',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={outfit.className}>

        <header className='flex justify-center py-6 lg:py-7'>
          <div className="w-10/12 lg:w-8/12 flex justify-between">
            <h2 className='text-white text-2xl'>
              Kika Decora
            </h2>
            <a href="#">
              <Image 
                  src="/WhatsApp.svg"
                  alt="Picture of the author"
                  width={66}
                  height={66}
                />
            </a>
          </div>
        </header>

        {children}
      </body>
    </html>
  )
}
