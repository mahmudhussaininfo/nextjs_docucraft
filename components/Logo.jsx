import Image from "next/image.js";
import Link from "next/link.js";

const Logo = () => {
  return (
    <>
      <div className="lg:flex">
        <Link href="/">
          <Image
            className="h-6 w-auto"
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={24}
            priority
          />
        </Link>
      </div>
    </>
  );
};

export default Logo;
