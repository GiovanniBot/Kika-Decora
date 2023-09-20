import Image from 'next/image'
import Link from 'next/link'
import { Outfit } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import MobileNav from './components/MobileNav'
import HeroSVGs from './components/HeroSVGs'
import DesktopNav from './components/DesktopNav'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kika Decora',
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
        <MobileNav />
        <header className='flex justify-center py-4 md:py-6 lg:py-7 border-collapse'>
          <div className="w-10/12 lg:w-8/12 flex justify-between">
            <Link href={`/`}>
              <h2 className='text-white text-2xl mt-2'>
                Kika Decora
              </h2>
            </Link>
            
            <div className='hidden lg:flex items-center text-lg'>
              <DesktopNav />
              <a href="https://api.whatsapp.com/send?phone=5571996337259" target='blank'>
                <Image
                  src="/WhatsApp.svg"
                  alt="WhatsApp Logo"
                  width={66}
                  height={66}
                />
              </a>
            </div>
          </div>
        </header>

        {children}

        <section className='flex justify-center mt-5 mb-20 border-collapse lg:hidden'>
          <div className="w-8/12 text-center grid grid-rows-3">
            <p className='text-black text-sm/10 font-semibold mt-2 row-span-1 row-start-1'>
              Não encontrou o que procura?
            </p>
            <p className='text-[#666666] text-xs/4 row-span-1 row-start-2'>
              Aceitamos sujestões, entre em contato para conversármos pelo <span className='text-[#8D85C9] underline'>WhatsApp</span>.
            </p>
            <div className=' text-xs/4 row-span-1 row-start-3 pt-0'>
              <p className='text-[#666666]'>2023 © Kika Mini Decora</p>
              <a href="https://api.whatsapp.com/send?phone=5571996337259" target='blank' className='text'><span className='text-[#666666]'>Desenvolvido por </span>Giovanni Almeida.</a>
            </div>
          </div>
        </section>

        <div className='rotate-180 hidden lg:block'>
         <HeroSVGs />
        </div>
        <footer className='bg-[#111648]'>
          <div className='hidden lg:flex flex-wrap justify-around align-middle bg-[#000235] pb-10 pt-4 rounded-b-2xl text-lg'>
            <span className='text-white'>
              2023 © Kika Mini Decora
            </span>
            <DesktopNav />
          </div>
        </footer>
        <div className='py-3 bg-[#111648] text-center text-md hidden lg:block'>
          <a href="https://api.whatsapp.com/send?phone=5571996337259" target='blank'>Desenvolvido por Giovanni Almeida</a>
        </div>
      </body>
    </html>
  )
}
