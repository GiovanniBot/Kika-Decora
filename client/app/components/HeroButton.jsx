import Link from 'next/link';

export default function HeroButton({ children }) {
  return <Link href="/themes">
      <button className='flex justify-center align-middle rounded-full text-white uppercase text-xs md:text-sm lg:text-xl bg-[#999CE1] py-2 px-2 md:px-3 lg:px-12'>
        {children}
      </button>
  </Link>;  
}