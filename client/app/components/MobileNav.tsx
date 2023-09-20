'use client';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'

export default function MobileNav() {
  const currentPathname = usePathname();

  const isActive = (href: string) => {
    return currentPathname === href;
  };

  return (
    <main>
      <div className="w-full flex flex-wrap justify-center">
        <div className='bg-navbar-mobile text-transparent fixed bottom-1 w-[90%] md:w-[60%] h-[63px] bg-[#4d4385f7] z-10 lg:hidden rounded-full'>placeholder</div>
      </div>
      <menu className='fixed bottom-0 w-full z-20 lg:hidden'>
        <ul className='flex justify-center h-[75px] border-collapse'>
          <li className={`absolute w-[68px] h-[68px] left-9 md:left-48 top-0 mx-6 rounded-full bg-[#4D4385] flex flex-wrap justify-center items-end pb-1 border-[1px] border-[#453c78] ${isActive('/') ? 'mobile-nav-active' : ''}`}>
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
          <li className={`absolute w-[68px] h-[68px] center-0 top-0 mx-6 rounded-full bg-[#4D4385] flex flex-wrap justify-center items-end pb-1 border-[1px] border-[#453c78] ${isActive('/themes') ? 'mobile-nav-active' : ''}`}>
            <Link href={`/themes`}>
              <span className='text-white text-sm/8 font-extralight'>
                <Image
                  src="/themes.svg"
                  alt='Ícone de uma paleta de cores.'
                  width={24}
                  height={24}
                  className='mx-auto'
                />
                temas
              </span>
            </Link>
          </li>
          <li className={`absolute w-[68px] h-[68px] right-9 md:right-48 top-0 mx-6 rounded-full bg-[#4D4385] flex flex-wrap justify-center items-end pb-1 border-[1px] border-[#453c78] ${isActive('/about') ? 'mobile-nav-active' : ''}`}>
            <Link href={`/about`}>
              <span className='text-white text-sm/8 font-extralight'>
                <Image
                  src="/about.svg"
                  alt='Ícone de pessoas.'
                  width={24}
                  height={24}
                  className='mx-auto'
                />
                sobre
              </span>
            </Link>
          </li>
        </ul>
      </menu>
    </main>
  );
}
