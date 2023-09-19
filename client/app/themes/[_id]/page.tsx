import getTheme from '@/lib/getTheme';
import Image from 'next/image';
import HeroSVGs from '@/app/components/HeroSVGs';
import { Roboto } from 'next/font/google';
import HeroButton from '@/app/components/HeroButton';

const roboto = Roboto({ subsets: ['latin'], weight: ["400", "700"] });

type Params = {
  params: {
    _id: string
  }
}

export default async function ThemePage({ params: { _id } }: Params) {
  const themeData = await getTheme(_id);

  return (
    <main>
      <section className='home-hero grid grid-cols-12'>
        <div className='col-start-2 col-end-12 xl:col-end-7 mx-auto'>
          <div className='mt-3 xl:me-3 2xl:me-0'>
            <Image
              src={`${themeData.mainImg}`}
              alt={`${themeData.name} main image.`}
              width={500}
              height={500}
              priority={true}
              className='rounded-md aspect-video object-cover'
            />
          </div>
        </div>

        {/* Mobile */}
        <div className='col-start-2 col-span-5 md:col-start-3 md:col-span-4 lg:col-start-4 lg:col-span-3 xl:col-start-8 xl:col-span-4 mt-7 mb-2 bg-[#000235] xl:hidden'>
          <div className={`${roboto.className} bg-[#4d4385] rounded-md py-3 xl:py-4 flex justify-between items-center text-start text-slate-300 text-xs md:text-sm xl:text-lg mb-0`}>
            <p className='ms-2 me-1'><span className='font-semibold'>Tema:</span> {themeData.name}</p>
          </div>
        </div>

        <div className='col-start-7 col-span-6 lg:col-start-7 lg:col-span-4 mt-5 w-[90%] flex justify-center items-center xl:hidden'>
          <HeroButton href={'/'}>
            Quero esse tema
          </HeroButton>
        </div>

        {/* Desktop */}
        <div className='col-start-7 col-span-5 mt-16 mb-2 bg-[#000235] hidden xl:inline-block'>
          <div className='grid-cols-2 flex flex-wrap text-white justify-between'>
            <div className={`${roboto.className} bg-[#4d4385] rounded-md py-4 flex justify-between items-center text-start text-slate-300 text-xs md:text-sm lg:text-lg mb-0 lg:col-auto w-[45%]`}>
              <span className='ps-2 pe-1'><span className='font-semibold'>Tema:</span> {themeData.name}</span>
            </div>
            
            <div className='col-start-auto col-span-auto col-auto flex justify-center items-center w-[50%]'>
              <div className='w-[90%] lg:w-[100%]'>
                <HeroButton href={'/'}>
                  Quero esse tema
                </HeroButton>
              </div>
            </div>
          </div>

          <div className='hidden md:inline-block text-slate-400 text-lg mt-9 lg:mt-14 pe-28'>
            Com a Kika Decora você encontra os mais diversos temas para tornar sua festa única e incrível.
          </div>
        </div>
      </section>

      <HeroSVGs/>

      <section className='w-[87%] xl:w-[80%] 2xl:w-[70%] mx-auto mt-36 md:mt-6 mb-4 xl:mb-6 2xl:mb-9 text-center'>
        <p className='font-semibold text-lg lg:text-2xl'>Detalhes</p>
        <p className='text-slate-400 text-sm lg:text-lg mt-2'>Aqui você encontra todos os detalhes do tema {themeData.name}.</p>
      </section>
    </main>
  )
}