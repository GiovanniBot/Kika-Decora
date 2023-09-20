import Image from 'next/image'
import Link from 'next/link';
import { Roboto } from 'next/font/google';
import type { Metadata } from 'next'
import HeroButton from './components/HeroButton'
import getAllThemes from '@/lib/getAllThemes';
import HeroSVGs from './components/HeroSVGs';
// import truncateThemeName from '@/lib/truncateThemeName';

const roboto = Roboto({ subsets: ['latin'], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: 'Kika Decora - Bem vindo!',    
}

export default async function Home() {
  const themesData = await getAllThemes();

  const topFiveThemes = themesData.filter((theme) => theme.topFive);
  const newThemes = themesData.filter((theme) => theme.newTheme);

  return (
    <main>
      <section className='home-hero grid grid-cols-12'>
        <div className='col-start-2 col-end-8 lg:col-start-3 lg:col-end-7 mt-3 md:mt-7 lg:mt-12'>
          <span className="text-white text-[30px] md:text-[60px] lg:text-[90px] leading-none font-bold">
            Seu Evento Bombando Sempre!
          </span>
          <span className='hidden md:inline-block text-slate-400 text-lg mt-9 lg:mt-14 pe-28'>
            Com a Kika Decora você encontra os mais diversos temas para tornar sua festa única e incrível.
          </span>
          <div className='mt-9 lg:mt-14 w-[81%]'>
            <HeroButton href={'/themes'}>
              Encontrar temas
            </HeroButton>
          </div>
        </div>

        <div className='col-start-8 col-span-12'>
          <div className='mt-1 md:mt-4'>
            <Image 
              src="/calendar.svg"
              alt="Illustration of a man dancing and a calendar."
              width={500}
              height={500}
              priority={true} // Lazy loading is automatically disabled for images using priority.
            />
          </div>
        </div>

        <span className='inline-block md:hidden col-start-2 col-span-10 lg:col-start-3 lg:col-span-8 text-slate-300 text-sm text-center mt-6'>
          Com a Kika Decora você encontra os mais diversos temas para tornar sua festa única e incrível.
        </span>
        <span className={`${roboto.className} hidden md:inline-block col-start-2 col-span-10 lg:col-start-3 lg:col-span-8 text-white text-sm lg:text-xl uppercase mt-11 ms-2`}>
          Featured on
        </span>
        <div className='col-start-2 col-span-10 lg:col-start-3 lg:col-span-8 mt-7 md:mt-3 mb-2 md:mb-2 bg-[#000235]'>
          <div className={`${roboto.className} bg-[#4d4385] rounded-md py-3 lg:py-4 flex justify-around text-slate-300 text-xs md:text-sm lg:text-lg mb-0`}>
            <span>Painéis Temáticos</span>
            <span>Móveis Provençais</span>
            <span>Mesaninos</span>
            <span className='hidden md:inline-block'>Painel Redondo</span>
          </div>
        </div>
      </section>

      <HeroSVGs/>

      <section className='mt-40 md:mt-6 grid grid-cols-12'>
        <div className='col-start-2 col-span-10 lg:col-start-3 lg:col-span-8 flex justify-between mb-3'>
          <span className='col-start-2 col-span-2 font-semibold text-lg lg:text-2xl'>
            Top 5
          </span>
          <Link href="/themes" className='font-normal text-sm lg:text-lg text-slate-500 underline'>
            Ver Todos
          </Link>
        </div>

        <div className='media-scroller col-start-1 col-end-13 w-full whitespace-nowrap md:pl-16 lg:pl-0 lg:justify-center auto-cols-[39%] lg:auto-cols-[14%]'>

          {topFiveThemes.map((theme) => (
            <Link key={theme._id} href={`/themes/${theme._id}`}>
              <div className='media-element'>
                <Image
                  src={theme.mainImg}
                  alt={theme.name}
                  width={150}
                  height={150}
                />

                <p className='text-xs md:text-lg ms-2'>
                  {/* {truncateThemeName(theme.name)} */}
                  {theme.name}
                </p>
              </div>
            </Link>
          ))}

        </div>
      </section>

      <section className='mt-6 lg:mt-20 grid grid-cols-12'>
        <div className='col-start-2 col-span-10 lg:col-start-3 lg:col-span-8 flex justify-between mb-3'>
          <span className='col-start-2 col-span-2 font-semibold text-lg lg:text-2xl'>
            Novidades
          </span>
          <Link href="/themes" className='font-normal text-sm lg:text-lg text-slate-500 underline'>
            Ver Todos
          </Link>
        </div>

        <div className='media-scroller col-start-1 col-end-13 w-full whitespace-nowrap md:pl-16 lg:pl-0 lg:justify-center auto-cols-[39%] lg:auto-cols-[14%]'>

          {newThemes.map((theme) => (
            <Link key={theme._id} href={`/themes/${theme._id}`}>
              <div className='media-element'>
                <Image
                  src={theme.mainImg}
                  alt={theme.name}
                  width={150}
                  height={150}
                />

                <p className='text-xs md:text-lg ms-2'>
                  {/* {truncateThemeName(theme.name)} */}
                  {theme.name}
                </p>
              </div>
            </Link>
          ))}

        </div>
      </section>

      <section className='mt-12 lg:mt-24 grid grid-cols-12'>
        <p className='col-start-2 lg:col-start-3 col-span-8 font-semibold text-lg lg:text-2xl mb-3 lg:mb-6'>
          Onde nos encontrar
        </p>

        <div className='col-start-2 lg:col-start-3 col-span-10 lg:col-span-8 flex flex-wrap md:flex-row'>
          <div className='basis-full md:basis-3/5 mb-3'>
            <Image
              className='w-full'
              src="/maps.png"
              alt="Mapa"
              width={500}
              height={500}
            />
          </div>
          <div className='basis-full md:basis-2/5 md:pl-6 text-sm lg:text-xl lg:mt-3'>
            <p><span className='font-semibold'>Local:</span> Rua exemplo, Madre de deus, n 1369.</p>
            <p><span className='font-semibold'>WhatsApp:</span> (71) 9XXXX-XXXX</p>
            <p><span className='font-semibold'>E-mail:</span> exemplo@exemplo.com</p>
            <p><span className='font-semibold'>Instagram:</span> @kika_mini_decora</p>
          </div>
        </div>
      </section>

    </main>
  )
}
