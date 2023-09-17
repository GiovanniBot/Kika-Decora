import getAllThemes from '@/lib/getAllThemes';
import HeroSVGs from '../components/HeroSVGs';
import Image from 'next/image';
import SelectTagDropdown from '../components/SelectTagDropdown';
import ThemesList from '../components/ThemesList';
import { Roboto } from 'next/font/google';
import type { Metadata } from 'next'

const roboto = Roboto({ subsets: ['latin'], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: 'Kika Decora - Temas',
}

export default async function Themes() {
  const themesData: Promise<Theme[]> = getAllThemes()
  const themes = await themesData

  return (
    <main>
      <section className='home-hero grid grid-cols-12'>
        <div className='col-start-1 col-end-7 sm:col-start-2 lg:col-start-3 lg:col-end-6 ms-2 me-1 md:me-4'>
          <div className='mt-1 md:mt-4'>
            <Image 
              src="/smartphone.svg"
              alt="Illustration of a smartphone and a check mark."
              width={500}
              height={500}
              priority={true}
            />
          </div>
        </div>

        <div className='col-start-7 col-end-13 lg:col-start-6 lg:col-end-11  mt-8 sm:mt-12 md:mt-20 lg:mt-14 xl:mt-23 2xl:mt-32  lg:flex lg:justify-end flex-wrap'>
          <span className="text-white text-[35px] md:text-[54px] lg:text-[50px] xl:text-[60px] 2xl:text-[84px] leading-none font-bold text-right">
            Selecione <br className='lg:hidden'/>O Tema <br className='hidden xl:inline-block'/>Da Festa 🎉
          </span>
          
          <div className={`${roboto.className} bg-[#4d4385] rounded-md py-3 lg:py-4 justify-between items-center text-start text-slate-300 text-xs md:text-sm lg:text-lg mb-0 hidden lg:flex lg:w-[90%] lg:h-12 lg:mt-8 xl:w-[80%] xl:h-14 2xl:w-[55%]`}>
            <span className='ms-3'>Clique para escolher:</span>

            <SelectTagDropdown themes={themes} />
          </div>
        </div>

        <div className='col-start-2 col-span-10 lg:col-start-3 lg:col-span-8 mt-7 mb-2 bg-[#000235] lg:hidden'>
          <div className={`${roboto.className} bg-[#4d4385] rounded-md py-3 lg:py-4 flex justify-between items-center text-start text-slate-300 text-xs md:text-sm lg:text-lg mb-0`}>
            <span className='ms-3'>Selecione o Tema da festa:</span>

            <SelectTagDropdown themes={themes} />
          </div>
        </div>

        <HeroSVGs/>
      </section>

      <section className='mt-40 md:mt-6 grid grid-cols-12'>
        <div className='col-start-2 col-span-10 lg:col-start-3 lg:col-span-8 flex justify-between mb-3'>
          <span className='col-start-2 col-span-2 font-semibold text-lg lg:text-2xl'>
            Todos os Temas
          </span>
        </div>
      </section>

      <ThemesList themes={themes}/>
    </main>
  )
}