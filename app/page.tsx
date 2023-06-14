import Image from 'next/image'
import HeroButton from './components/Button/HeroButton'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section className='home-hero grid grid-cols-12'>
        <div className='col-start-2 col-end-8 mt-7'>
          <span className="text-white text-[40px] leading-none font-bold">
            Seu Evento Bombando Sempre!
          </span>
          <div className='pt-12'>
            <HeroButton>
              Encontrar temas
            </HeroButton>
          </div>
        </div>
        <div className='col-start-8 col-span-12'>
          <Image 
            src="/calendar.svg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
      </section>
    </main>
  )
}
