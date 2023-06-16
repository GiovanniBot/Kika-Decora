import { Roboto } from 'next/font/google';
import Image from 'next/image'
import HeroButton from './components/Button/HeroButton'

const roboto = Roboto({ subsets: ['latin'], weight: ["400", "700"] });

export default function Home() {
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
          <div className='pt-9 lg:pt-14'>
            <HeroButton>
              Encontrar temas
            </HeroButton>
          </div>
        </div>

        <div className='col-start-8 col-span-12'>
          <div className='mt-1 md:mt-4'>
            <Image 
              src="/calendar.svg"
              alt="Illustration of a calendar and a man dancing."
              width={500}
              height={500}
            />
          </div>
        </div>

        <span className='inline-block md:hidden col-start-2 col-span-10 lg:col-start-3 lg:col-span-8 text-slate-300 text-sm text-center mt-6'>
          Com a Kika Decora você encontra os mais diversos temas para tornar sua festa única e incrível.
        </span>
        <span className={`${roboto.className} hidden md:inline-block col-start-2 col-span-10 lg:col-start-3 lg:col-span-8 text-white text-sm lg:text-xl uppercase mt-11 ms-2`}>
          Featured on
        </span>
        <div className={`${roboto.className} col-start-2 col-span-10 lg:col-start-3 lg:col-span-8 bg-[#4d4385] mt-7 md:mt-3 rounded-md py-3 lg:py-4 flex justify-around text-slate-300 text-xs md:text-sm lg:text-lg`}>
          <span>Painéis Temáticos</span>
          <span>Móveis Provençais</span>
          <span className='hidden md:inline-block'>Trio de Cilindros e Mesaninos</span>
          <span>Painel Redondo</span>
        </div>

        {/* // TODO: Curly SVGs */}
      </section>
    </main>
  )
}
