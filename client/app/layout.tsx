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

        <header className='flex justify-center py-4 md:py-6 lg:py-7 border-collapse'>
          <div className="w-10/12 lg:w-8/12 flex justify-between">
            <h2 className='text-white text-2xl mt-2'>
              Kika Decora
            </h2>
            <a href="#">
              <Image
                  src="/WhatsApp.svg"
                  alt="WhatsApp Logo"
                  width={66}
                  height={66}
                />
            </a>
          </div>
        </header>

        {children}

        <footer>
          <section className='flex justify-center py-5 md:py-7 lg:py-8 border-collapse md:hidden'>
            <div className="w-8/12 text-center grid grid-rows-3">
              <p className='text-black text-sm/8 font-semibold mt-2 row-span-1 row-start-1'>
                Não encontrou o tema que procura?
              </p>
              <p className='text-[#666666] text-xs/4 row-span-1 row-start-2'>
                Aceitamos sujestões, entre em contato para conversármos pelo <span className='text-[#8D85C9] underline'>WhatsApp</span>.
              </p>
              <p className='text-[#8D85C9] text-xs row-span-1 row-start-3 pt-5'>
                2023 © Kika Mini Decora
              </p>
            </div>
          </section>

          <section>
            
          </section>
        </footer>
      </body>
    </html>
  )
}
