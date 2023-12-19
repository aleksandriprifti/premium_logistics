import Link from "next/link";
import Image from "next/image";
import React from "react";

const logo = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo/logo-1.svg"
        alt="logo"
        width={80}
        height={80}
        className="mr-6"
      />
    </Link>
  );
};

export default logo;
