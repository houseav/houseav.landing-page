"use client";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button";
import { useState } from "react";
import { ConfettiButton } from "./animation/Confetti";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleRedirect = () => {
    setTimeout(() => {
      window.location.href = "https://houseavfrontend-production.up.railway.app/sign-in";
    }, 1000); // 1500 milliseconds
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 backdrop-blur-md sticky top-0 z-20 bg-gradient-to-r from-[#fdfeff]/50 to-[#FFFFFF]/50">
      <Image
        src={Logo}
        width={35}
        height={35}
        alt="Logo"
        className="cursor-pointer"
      />

      <div className="block md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {isMenuOpen && (
        <nav className="fixed inset-0 flex flex-col justify-center items-center bg-gradient-to-r from-[#fdfeff]/10 to-[#FFFFFF]/50 backdrop-blur-md z-10 mt-44">
          <ul className="flex flex-col items-center gap-6 bg-gradient-to-r from-[#fdfeff]/70 to-[#FFFFFF]/70 backdrop-blur-md w-full pt-10 pb-10">
            <li>
              <a href="#footer" onClick={toggleMenu}>
                Contacts
              </a>
            </li>
            <li>
              <Button text="Login" onClick={toggleMenu} />
            </li>
          </ul>
        </nav>
      )}

      <nav className="hidden md:block">
        <ul className="flex gap-6 items-center">
          <li>
            <a href="#footer">Contacts</a>
          </li>
          <div className="relative" onClick={handleRedirect}>
            <ConfettiButton>Login</ConfettiButton>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
