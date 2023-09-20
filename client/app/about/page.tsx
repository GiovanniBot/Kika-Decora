import Image from 'next/image';
import HeroSVGs from '@/app/components/HeroSVGs';
import { Roboto } from 'next/font/google';
import HeroButton from '@/app/components/HeroButton';
import MapsSection from '../components/MapsSection';
import type { Metadata } from 'next'

const roboto = Roboto({ subsets: ['latin'], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: 'Kika Decora - Sobre nós',
}

export default async function AboutPage() {

  return (
    <main>
      <section className='home-hero grid grid-cols-12'>
        <div className='col-start-2 col-end-8 lg:col-start-3 lg:col-end-7 mt-3 md:mt-7 lg:mt-12'>
          <span className="text-white text-[30px] md:text-[60px] xl:text-[90px] leading-none font-bold">
            Seu Tema Pefeito Com A Kika Decora!
          </span>
          <span className='hidden md:inline-block text-slate-400 text-lg mt-9 lg:mt-14 pe-28'>
            Saiba mais sobre a Kika Decora e como podemos te ajudar a ter a festa dos seus sonhos.
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
              width={450}
              height={450}
              priority={true}
            />
          </div>
        </div>

        <span className='inline-block md:hidden col-start-2 col-span-10 lg:col-start-3 lg:col-span-8 text-slate-300 text-sm text-center mt-6'>
          Saiba mais sobre a Kika Decora e como podemos te ajudar a ter a festa dos seus sonhos.
        </span>
      </section>

      <HeroSVGs/>

      <section className='w-[80%] xl:w-[66%] 2xl:w-[66%] mx-auto mt-36 md:mt-6 mb-4 xl:mb-6 2xl:mb-9 text-center'>
        <p className='font-semibold text-lg lg:text-2xl'>Sobre nós</p>
        <p className='text-sm/4 lg:text-lg mt-5 lg:mt-8 text-justify'><b>Kika Mini Decora</b> - O seu parceiro para festas inesquecíveis.</p>
        <p className='text-sm/4 lg:text-lg mt-4 text-justify'>A Kika Mini Decora é uma empresa de aluguel de itens de festa com 5 anos de experiência. Oferecemos uma variedade de opções, como painéis temáticos, móveis provençais, trio de cilindros e mezanino e painel redondo.</p>
        <p className='text-sm/4 lg:text-lg mt-4 text-justify'>Nossos serviços incluem entrega e montagem dos itens alugados, garantindo praticidade e economia para os clientes. Além disso, oferecemos pacotes personalizados para atender a diferentes tipos de eventos.</p>
        <p className='text-sm/4 lg:text-lg mt-4 text-justify'>Priorizamos a qualidade e higiene dos nossos itens de festa, que passam por rigorosos processos de higienização e são feitos com materiais de ponta.</p>
        <p className='text-sm/4 lg:text-lg mt-4 text-justify'>Nossa política de cancelamento requer um aviso de 48 horas antes do evento, sendo que 50% do valor pago previamente não é reembolsado, conforme o contrato.</p>
        <p className='text-sm/4 lg:text-lg mt-4 text-justify'>Personalização é uma de nossas especialidades, permitindo que os clientes escolham cores, temas e logotipos de acordo com suas preferências.</p>
        <p className='text-sm/4 lg:text-lg mt-4 text-justify'>O período mínimo de aluguel é de 24 horas, com valores diferenciados para prazos mais longos. Oferecemos suporte durante o evento, mediante disponibilidade e custo adicional.</p>
        <p className='text-sm/4 lg:text-lg mt-4 text-justify'>Aceitamos pagamento em dinheiro, débito, crédito e pix, e disponibilizamos um catálogo online em nosso site (www.exemplo.com.br) e no Instagram (@Kika_mini_decora).</p>
        <p className='text-sm/4 lg:text-lg mt-4 text-justify'>Clientes frequentes e aluguéis de longa duração têm direito a descontos especiais, a serem definidos caso a caso.</p>
        <p className='text-sm/4 lg:text-lg mt-4 text-justify'>Nossos clientes avaliam nossos serviços no Google, garantindo transparência e confiança.</p>
        <p className='text-sm/4 lg:text-lg mt-4 text-justify'>Confie na Kika Mini Decora para tornar sua festa inesquecível. Entre em contato hoje mesmo para mais informações e reservas.</p>
      </section>

      <MapsSection />
        
    </main>
  )
}