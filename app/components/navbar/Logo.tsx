"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div>
      <Image
        alt='logo'
        className='cursor-pointer hidden md:block'
        height='30'
        width='30'
        src='/images/logo.png'
      />
    </div>
  );
};

export default Logo;
