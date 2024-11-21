import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <div className="flex justify-between p-5 shadow-sm bg-white">
      <Image src="/logo2.svg" width={50} height={50} alt="Logo" />
      <Image src="/logo.svg" width={50} height={50} alt="Logo" />
      <Button>Get Started</Button>
    </div>
  );
}

export default Header;
