import Shield from "@/public/assets/shield.png";
import safeplace from "@/public/assets/safeplace.png";
import InternetCT from "@/public/assets/internetCirclesTriangles.png";
import checker from "@/public/assets/checker.png";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="pb-28 flex flex-col items-center bg-gradient-to-t from-white to-[#7d8289]">
      <div className="flex flex-col items-center justify-center pt-28 px-12 pb-10 md:w-[600px]">
        <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl border-slate-300/80">
          Strong System
        </div>
        <div className="text-3xl md:text-4xl lg:text-5xl py-6 font-bold tracking-tighter text-center bg-gradient-to-b from-white to-[#b1b1b1] text-transparent bg-clip-text">
          We take care on social security
        </div>

        <div className="text-center text-lg mb-8 md:text-xl">
          We have designed the platform to be a one-stop solution for all
          churches
        </div>
      </div>

      <div className="flex flex-col gap-16 pt-4 lg:flex-row justify-center items-center px-8">
        <div className="shadow-2xl rounded-xl flex justify-center items-center flex-col p-8 max-w-[400px] bg-white/30 backdrop-blur-lg hover:scale-105 hover:bg-white/50 hover:border hover:border-gray-300 transition-all duration-300 ease-in-out">
          <Image src={checker} alt="checker" className="pb-4" />
          <div className="text-2xl font-bold pb-3 text-center">
            Integration ecosystem
          </div>
          <div className="text-center">
            We verify the identity of every member at each stage of the process,
            enhancing our social hacking security standards.
          </div>
        </div>
        <div className="shadow-2xl rounded-xl flex justify-center items-center flex-col p-8 max-w-[400px] bg-white/30 backdrop-blur-lg hover:scale-105 hover:bg-white/50 hover:border hover:border-gray-300 transition-all duration-300 ease-in-out">
          <Image src={Shield} alt="Shield" className="pb-4" />
          <div className="text-2xl font-bold pb-3 text-center">
            Check Properties Information
          </div>
          <div className="text-center">
            Before you are be able to have your house posted will be accurately
            check.
          </div>
        </div>
        <div className="shadow-2xl rounded-xl flex justify-center items-center flex-col p-8 max-w-[400px] bg-white/30 backdrop-blur-lg hover:scale-105 hover:bg-white/50 hover:border hover:border-gray-300 transition-all duration-300 ease-in-out">
          <Image src={InternetCT} alt="internet" className="pb-4" />
          <div className="text-2xl font-bold pb-3 text-center">
            Integration Places
          </div>
          <div className="text-center">
            Every place that is posted will be integrated as part of our
            community, adhering to a consistent set of rules and standards, to
            live each other with good principles.
          </div>
        </div>

        <div className="shadow-2xl rounded-xl flex justify-center items-center flex-col p-8 max-w-[400px] bg-white/30 backdrop-blur-lg hover:scale-105 hover:bg-white/50 hover:border hover:border-gray-300 transition-all duration-300 ease-in-out">
          <Image src={safeplace} alt="safeplace" className="pb-4" />
          <div className="text-2xl font-bold pb-3 text-center">
            Goal setting and tracking
          </div>
          <div className="text-center">
            The early stages of the process are crucial, and we have designed
            basic functionalities to make Houseav a connector for Christians.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
