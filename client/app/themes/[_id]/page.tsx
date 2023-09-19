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
        <div className='col-start-2 col-end-12 xl:col-start-3 xl:col-end-7 mx-auto'>
          <div className='mt-3 xl:me-5'>
            <Image
              src={`${themeData.mainImg}`}
              alt={`${themeData.name} main image.`}
              width={600}
              height={600}
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
        <div className='col-start-7 col-span-5 xl:col-span-4 mt-12 2xl:mt-20 mb-2 bg-[#000235] hidden xl:inline-block'>
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

      <section className='w-[80%] xl:w-[66%] 2xl:w-[66%] mx-auto mt-36 md:mt-6 mb-4 xl:mb-6 2xl:mb-9 text-center'>
        <p className='font-semibold text-lg lg:text-2xl'>Detalhes</p>
        <p className='text-slate-400 text-xs lg:text-lg mt-2 hidden lg:inline-block'>Aqui você encontra todos os detalhes do tema {themeData.name}.</p>
        <p className='text-sm/4 mt-5 lg:mt-9 text-justify'>O Kit é composto por todos os itens da foto, <b>COM EXCEÇÃO</b> dos doces personalizados, lembrancinhas personalizadas e balões.</p>
        <p className='text-xs mt-5 lg:mt-9 text-start font-bold uppercase'>Importante:</p>
        <ul className='w-[87%] lg:w-[93%] xl:w-[93%] text-start text-sm/4 mx-auto list-disc'>
          <li className='mt-1'>Os móveis são montados e desmontados por nós;</li>
          <li className='mt-1'>O aluguel será realizado mediante assinatura de contrato;</li>
          <li className='mt-1'>As cores podem ser substituídas pela cor de sua preferência;</li>
          <li className='mt-1'>Os demais itens como: Balões, personalizados, doces, lembrancinhas, flores, vela e outros <b>não estão inclusos</b>;</li>
          <li className='mt-1'>Frete não incluso no valor.</li>
        </ul>
        <p className='text-xs mt-5 lg:mt-9 text-start font-bold uppercase'>Medidas:</p>
        <ul className='text-start text-sm/4 mx-auto'>
          <li className='mt-1'>Altura: 000,00 cm</li>
          <li className='mt-1'>Largura: 000,00 cm</li>
          <li className='mt-1'>Comprimento: 000,00 cm</li>
          <li className='mt-1'>Peso: 00.000 kg</li>
        </ul>

        <div className='col-start-auto col-span-auto col-auto mt-[35px] flex justify-center items-center w-[50%] mx-auto'>
          <div className='w-[90%] lg:w-[100%]'>
            <HeroButton href={'/'} customClassName={'bg-[#4D4385] px-5'}>
              Quero esse tema
            </HeroButton>
          </div>
        </div>
      </section>

      <section>
        <div className='w-[87%] xl:w-[70%] mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mt-[35px] md:mt-14'>
          {themeData.imgs.map((image) => (
            <div className='ms-3 me-3 mb-8 flex justify-center'>
              <Image
                key={image._id}
                src={image.url}
                alt={themeData.name}
                width={400}
                height={400}
                className='rounded-md aspect-video object-cover'
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}