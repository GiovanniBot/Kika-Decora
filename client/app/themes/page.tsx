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
  const themesData = await getAllThemes();

  return (
    <main>
      <section className='home-hero grid grid-cols-12'>
        <div className='col-start-1 col-end-7 sm:col-start-2 lg:col-start-3 lg:col-end-6 ms-2 me-1 md:me-4'>
          <div className='mt-1 md:mt-4'>
            <Image 
              src="/smartphone.png"
              alt="Illustration of a smartphone and a check mark."
              width={500}
              height={500}
              quality={100}
              priority={true}
            />
          </div>
        </div>

        {/* Desktop */}
        <div className='col-start-7 col-end-13 lg:col-start-6 lg:col-end-11  mt-8 sm:mt-12 md:mt-20 lg:mt-14 xl:mt-23 2xl:mt-32  lg:flex lg:justify-end flex-wrap'>
          <span className="text-white text-[35px] md:text-[54px] lg:text-[50px] xl:text-[60px] 2xl:text-[84px] leading-none font-bold text-right">
            Selecione <br className='lg:hidden'/>O Tema <br className='hidden xl:inline-block'/>Da Festa 🎉
          </span>
          
          <div className={`${roboto.className} bg-[#4d4385] rounded-md py-3 lg:py-4 justify-between items-center text-start text-slate-300 text-xs md:text-sm lg:text-lg mb-0 hidden lg:flex lg:w-[90%] lg:h-12 lg:mt-8 xl:w-[80%] xl:h-14 2xl:w-[55%]`}>
            <span className='ms-3'>Clique para escolher:</span>

            <SelectTagDropdown themes={themesData} />
          </div>
        </div>

        {/* Mobile */}
        <div className='col-start-2 col-span-10 md:col-start-3 md:col-span-8 lg:col-start-3 lg:col-span-8 mt-7 md:mt-9 mb-1 bg-[#000235] lg:hidden'>
          <div className={`${roboto.className} bg-[#4d4385] rounded-md py-2 lg:py-4 flex justify-between items-center text-start text-slate-300 text-xs md:text-sm lg:text-lg mb-0`}>
            <span className='ms-3'>Selecione o Tema da festa:</span>

            <SelectTagDropdown themes={themesData} />
          </div>
        </div>
      </section>

      <HeroSVGs />

      <section className='w-[87%] xl:w-[80%] 2xl:w-[70%] mx-auto mt-36 md:mt-6 mb-4 xl:mb-6 2xl:mb-9'>
        <p className='font-semibold text-lg lg:text-2xl'>Todos os Temas</p>
      </section>

      <ThemesList themes={themesData}/>
    </main>
  )
}