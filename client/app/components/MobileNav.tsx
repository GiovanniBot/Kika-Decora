'use client'
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'

export default function HeroSVGs() {
  const currentPathname = usePathname();

  const isActive = (href: string) => {
    return currentPathname === href;
  };

  return (
    <main>
      <div className='text-transparent fixed bottom-0 w-full h-[65px] bg-[#4D4385] z-10 lg:hidden'>placeholder</div>
      <menu className='fixed bottom-0 w-full z-20 lg:hidden'>
        <ul className='flex justify-center h-[78px] border-collapse'>
          <li className={`absolute w-[72px] h-[72px] left-9 md:left-44 top-0 mx-6 rounded-full bg-[#4D4385] flex flex-wrap justify-center items-end pb-1 ${isActive('/') ? 'mobile-nav-active' : ''}`}>
            <Link href={`/`}>
              <span className='text-white text-sm/8 font-extralight'>
                <Image
                  src="/home.svg"
                  alt='Ícone de uma casa.'
                  width={24}
                  height={24}
                  className='mx-auto'
                />
                início
              </span>
            </Link>
          </li>
          <li className={`absolute w-[72px] h-[72px] center-0 top-0 mx-6 rounded-full bg-[#4D4385] flex flex-wrap justify-center items-end pb-1 ${isActive('/themes') ? 'mobile-nav-active' : ''}`}>
            <Link href={`/themes`}>
              <span className='text-white text-sm/8 font-extralight'>
                <Image
                  src="/themes.svg"
                  alt='Ícone de uma paleta de cores.'
                  width={24}
                  height={24}
                  className='mx-auto'
                />
                Temas
              </span>
            </Link>
          </li>
          <li className={`absolute w-[72px] h-[72px] right-9 md:right-44 top-0 mx-6 rounded-full bg-[#4D4385] flex flex-wrap justify-center items-end pb-1 ${isActive('/about') ? 'mobile-nav-active' : ''}`}>
            <Link href={`/about`}>
              <span className='text-white text-sm/8 font-extralight'>
                <Image
                  src="/about.svg"
                  alt='Ícone de pessoas.'
                  width={24}
                  height={24}
                  className='mx-auto'
                />
                Sobre
              </span>
            </Link>
          </li>
        </ul>
      </menu>
    </main>
  );
}
