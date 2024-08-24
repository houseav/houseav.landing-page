import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/logo.png";
import {
  FaLinkedin,
  FaPinterest,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { MdOutlineArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <div
      className="flex flex-col md:flex-row  bg-gradient-to-t from-black to-[#484848]  text-white p-16 gap-8 justify-between md:px-20 xl:px-44"
      id="footer"
    >
      <div className="flex flex-col gap-8 text-gray-300/85 max-w-[300px]">
        <Image
          src={Logo}
          alt="Logo"
          height={52}
          width={52}
          className="cursor-pointer"
        />
        <div>
          <p className="text-bold"> hosueav.</p> is developed by{" "}
          <div className="font-semibold text-white hover:underline text-lg">
            <a href="https://github.com/lucaimbalzano">
              Luca Imbalzano <MdOutlineArrowOutward className="inline" />
            </a>
          </div>
        </div>
        <div className="flex gap-4 text-2xl cursor-pointer">
          <FaXTwitter className="hover:scale-125" />
          <AiFillInstagram className="hover:scale-125" />
          <FaPinterest className="hover:scale-125" />
          <FaLinkedin className="hover:scale-125" />
          <FaTiktok className="hover:scale-125" />
          <FaYoutube className="hover:scale-125" />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="font-bold text-lg">Legal</div>
        <Link href="/legal/privacy">
          <div className="cursor-pointer text-gray-300/85">Privacy </div>
        </Link>
        <Link href="/terms">
          <div className="cursor-pointer text-gray-300/85">Terms</div>
        </Link>
        <Link href="/security">
          <div className="cursor-pointer text-gray-300/85">Security</div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
