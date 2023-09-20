import Link from 'next/link';

interface HeroButtonProps {
  children: React.ReactNode;
  href: string;
  customClassName?: string;
}

export default function HeroButton({ children, href, customClassName }: HeroButtonProps) {
  return (
    <Link href={href} target='blank'>
      <button className={`${customClassName} text-center rounded-full text-white uppercase text-xs  md:text-sm xl:text-xl bg-[#999CE1] py-2 px-2 md:px-3 lg:px-5 whitespace-nowrap inline-block`}>
        {children}
      </button>
    </Link>
  );
}
