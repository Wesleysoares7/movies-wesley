import logo from "../../assets/images/logo.svg";
import netflixChicken from "../../assets/images/netflix-chicken.png";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useEffect, useState } from "react";

function HeaderNetflix() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop >= 50) {
        setIsScrolled(true);
        return;
      }
      setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-16 bg-gradient-to-b from-black/85 to-transparent transition-all duration-700 flex justify-between px-14 text-white ${
        isScrolled && "bg-[#141414]"
      }`}
    >
      <nav className="flex justify-center items-center gap-5">
        <img className="h-6 pr-4" src={logo} alt="netflix logo" />
        <ul className="flex gap-5">
          <li>
            <a
              href="#"
              className="hover:text-gray-400 transition-all text-sm font-medium"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#e5e5e5] hover:text-gray-400 transition-all text-sm"
            >
              Tv Shows
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#e5e5e5] hover:text-gray-400 transition-all text-sm"
            >
              Movies
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#e5e5e5] hover:text-gray-400 transition-all text-sm"
            >
              New & Popular
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#e5e5e5] hover:text-gray-400 transition-all text-sm"
            >
              My List
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#e5e5e5] hover:text-gray-400 text-sm transition-all"
            >
              Browse by Languages
            </a>
          </li>
        </ul>
      </nav>
      <nav className="flex gap-6 justify-center items-center">
        <IoSearch className="text-2xl" />
        <IoMdNotificationsOutline className="text-[1.75rem]" />
        <div>
          <img src={netflixChicken} alt="Avatar Netflix" className="h-7 w-7" />
        </div>
      </nav>
    </header>
  );
}

export default HeaderNetflix;
