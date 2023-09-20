import Link from 'next/link';

export default function DesktopNavbar() {
  return (
    <ul>
      <li>
        <Link href={'/'} className='mx-3 text-white font-light hover:text-[#999ce1]'>
          Home
        </Link>
        <span className='text-[#4d4385] pointer-events-none'>|</span>
        <Link href={'/themes'} className='mx-3 text-white font-light hover:text-[#999ce1]'>
          Temas
        </Link>
        <span className='text-[#4d4385] pointer-events-none'>|</span>
        <Link href={'/about'} className='mx-3 text-white font-light hover:text-[#999ce1]'>
          Sobre nós
        </Link>
      </li>
    </ul>
  );
}