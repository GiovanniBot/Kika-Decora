import Image from 'next/image'
import HeroButton from './components/Button/HeroButton'

export default function Home() {
  return (
    <main>
      <section className='home-hero grid grid-cols-12'>
        <div className='col-start-2 col-end-8 mt-3 md:mt-7 lg:mt-12 lg:col-start-3 lg:col-end-7'>
          <span className="text-white text-[30px] md:text-[60px] lg:text-[90px] leading-none font-bold">
            Seu Evento Bombando Sempre!
          </span>
          <span className='hidden md:block text-slate-400 text-lg mt-9 lg:mt-14 pe-28'>
            Com a Kika Decora você encontra os mais diversos temas para tornar sua festa única e incrível.
          </span>
          <div className='pt-9 md:pt-9 lg:pt-14'>
            <HeroButton>
              Encontrar temas
            </HeroButton>
          </div>
        </div>
        <div className='col-start-8 col-span-12'>
          <div className='pt-1 md:pt-4'>
            <Image 
              src="/calendar.svg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
