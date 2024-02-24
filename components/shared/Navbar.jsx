import Image from "next/image";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <header className="nav-container">
      <nav className="flex items-center justify-between">
        {/* logo */}
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            width={70}
            height={70}
            priority={true}
            className="w-[70px] h-[70px] xl:w-[117px] xl:h-[120px]"
          />
        </Link>
        {/* mobile nav */}
        <div className="block lg:hidden">
          <MobileNavbar />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
