import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<Boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      {/* Left Header */}
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          alt="logo"
          height={100}
          width={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden md:flex items-center space-x-4">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      {/* Right Header */}
      <div className="flex items-center space-x-4 text-md font-light cursor-pointer">
        <SearchIcon className="hidden sm:inline h-6 w-6" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/accounts">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
