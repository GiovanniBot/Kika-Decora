import Image from "next/image";

export default function HeroSVGs() {
  return (
    <section className='mt-12 lg:mt-24 grid grid-cols-12 lg:mb-20'>
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
  );
}