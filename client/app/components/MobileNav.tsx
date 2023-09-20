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
        <div className='bg-navbar-mobile text-transparent fixed bottom-1 w-[90%] md:w-[60%] h-[53px] bg-[#4d4385ec] z-10 lg:hidden rounded-full'>placeholder</div>
      </div>
      <menu className='fixed bottom-0 w-full z-20 lg:hidden'>
        <ul className='flex justify-center h-[75px] border-collapse'>
          <li className={`absolute w-[66px] h-[66px] left-9 md:left-48 top-0 mx-6 rounded-full bg-[#4D4385] flex flex-wrap justify-center items-center border-[1px] border-[#453c78] ${isActive('/') ? 'mobile-nav-active' : ''}`}>
            <Link href={`/`}>
              <div>
                <Image
                  src="/home.svg"
                  alt='Ícone de uma casa.'
                  width={22}
                  height={22}
                  className='mx-auto py-0 my-0'
                />
                <span className='text-white text-xs font-extralight py-0 my-0'>
                  início
                </span>
              </div>
            </Link>
          </li>
          <li className={`absolute w-[66px] h-[66px] center-0 top-0 mx-6 rounded-full bg-[#4D4385] flex flex-wrap justify-center items-center border-[1px] border-[#453c78] ${isActive('/themes') ? 'mobile-nav-active' : ''}`}>
            <Link href={`/themes`}>
              <div>
                <Image
                  src="/themes.svg"
                  alt='Ícone de uma paleta de cores.'
                  width={22}
                  height={22}
                  className='mx-auto py-0 my-0'
                />
                <span className='text-white text-xs font-extralight py-0 my-0'>
                  temas
                </span>
              </div>
            </Link>
          </li>
          <li className={`absolute w-[66px] h-[66px] right-9 md:right-48 top-0 mx-6 rounded-full bg-[#4D4385] flex flex-wrap justify-center items-center border-[1px] border-[#453c78] ${isActive('/about') ? 'mobile-nav-active' : ''}`}>
            <Link href={`/about`}>
              <div>
                <Image
                  src="/about.svg"
                  alt='Ícone de pessoas.'
                  width={22}
                  height={22}
                  className='mx-auto py-0 my-0'
                />
                <span className='text-white text-xs font-extralight py-0 my-0'>
                  sobre
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </menu>
    </main>
  );
}
