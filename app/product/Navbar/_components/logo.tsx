import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Link href="/">
        <Image
          src="/images/logo/logo-1.svg"
          alt="logo"
          width={80}
          height={80}
          className="mr-6"
        />
      </Link>
    </Link>
  );
};

export default Logo;
