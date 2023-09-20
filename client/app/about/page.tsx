import Image from 'next/image';
import HeroSVGs from '@/app/components/HeroSVGs';
import { Roboto } from 'next/font/google';
import HeroButton from '@/app/components/HeroButton';

const roboto = Roboto({ subsets: ['latin'], weight: ["400", "700"] });

export default async function AboutPage() {

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

      <section className='w-[80%] xl:w-[66%] 2xl:w-[66%] mx-auto mt-36 md:mt-6 mb-4 xl:mb-6 2xl:mb-9 text-center'>
        <p className='font-semibold text-lg lg:text-2xl'>Sobre nós</p>
        <p className='text-sm/4 mt-5 lg:mt-8 text-justify'><b>Kika Mini Decora</b> - O seu parceiro para festas inesquecíveis</p>
        <p className='text-sm/4 mt-4 text-justify'>A Kika Mini Decora é uma empresa de aluguel de itens de festa com 5 anos de experiência. Oferecemos uma variedade de opções, como painéis temáticos, móveis provençais, trio de cilindros e mezanino e painel redondo.</p>
        <p className='text-sm/4 mt-4 text-justify'>Nossos serviços incluem entrega e montagem dos itens alugados, garantindo praticidade e economia para os clientes. Além disso, oferecemos pacotes personalizados para atender a diferentes tipos de eventos.</p>
        <p className='text-sm/4 mt-4 text-justify'>Priorizamos a qualidade e higiene dos nossos itens de festa, que passam por rigorosos processos de higienização e são feitos com materiais de ponta.</p>
        <p className='text-sm/4 mt-4 text-justify'>Nossa política de cancelamento requer um aviso de 48 horas antes do evento, sendo que 50% do valor pago previamente não é reembolsado, conforme o contrato.</p>
        <p className='text-sm/4 mt-4 text-justify'>Personalização é uma de nossas especialidades, permitindo que os clientes escolham cores, temas e logotipos de acordo com suas preferências.</p>
        <p className='text-sm/4 mt-4 text-justify'>O período mínimo de aluguel é de 24 horas, com valores diferenciados para prazos mais longos. Oferecemos suporte durante o evento, mediante disponibilidade e custo adicional.</p>
        <p className='text-sm/4 mt-4 text-justify'>Aceitamos pagamento em dinheiro, débito, crédito e pix, e disponibilizamos um catálogo online em nosso site (www.exemplo.com.br) e no Instagram (@Kika_mini_decora).</p>
        <p className='text-sm/4 mt-4 text-justify'>Clientes frequentes e aluguéis de longa duração têm direito a descontos especiais, a serem definidos caso a caso.</p>
        <p className='text-sm/4 mt-4 text-justify'>Nossos clientes avaliam nossos serviços no Google, garantindo transparência e confiança.</p>
        <p className='text-sm/4 mt-4 text-justify'>Confie na Kika Mini Decora para tornar sua festa inesquecível. Entre em contato hoje mesmo para mais informações e reservas.</p>
      </section>

      <section className='mt-7 lg:mt-16 grid grid-cols-12'>
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
          <div className='basis-full md:basis-2/5 md:pl-6 text-sm lg:text-lg xl:text-xl lg:mt-3'>
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