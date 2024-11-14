"use client";


import Image from "next/image";
import Avatar1 from "@/public/assets/avatar-1.png";
import Avatar2 from "@/public/assets/avatar-2.png";
import Avatar3 from "@/public/assets/avatar-3.png";
import Avatar4 from "@/public/assets/avatar-4.png";
// import Avatar5 from "@/public/assets/avatar-5.png";
// import Avatar6 from "@/public/assets/avatar-6.jpeg";
import Avatar7 from "@/public/assets/avatar-7.png";
import Avatar8 from "@/public/assets/avatar-8.png";
import Avatar9 from "@/public/assets/avatar-9.png";
import Avatar10 from "@/public/assets/avatar-10.png";
import { motion } from "framer-motion";
import CardTestimonial from "./CardTestimonial";

const testimonials = [
  {
    user: "@rania",
    name: "Rania",
    avatar: Avatar2,
    message:
      "Consigliatissimo per chi vuole avere a che fare con persone di sani valori e principi! Grazie a Dio ho trovato houseav.",
  },
  {
    user: "@manuel",
    name: "Manuel",
    avatar: Avatar3,
    message:
      "I've saved a lot of my time using houseav without getting crazy to remember all the chats.",
  },
  {
    user: "@felipe",
    name: "Felipe",
    avatar: Avatar4,
    message: "Finally! I was expecting an app like this. 5 stars!",
  },
  {
    user: "@simone",
    name: "Simone",
    // avatar: Avatar5,
    avatar: Avatar2,
    message: "Can't wait to see how this app will grow in the future!",
  },
  {
    user: "@lucas",
    name: "Lucas",
    // avatar: Avatar6,
    avatar: Avatar4,
    message:
      "Sono certo che houseav. permettera un inizio di collaborazioni tra le chiese per portare il Vangelo a tutti.",
  },
  {
    user: "@davide",
    name: "Davide",
    avatar: Avatar7,
    message:
      "Sono certo che houseav. permettera un inizio di conoscenze importanti!",
  },
  {
    user: "@lorenzo",
    name: "Lorenzo",
    avatar: Avatar8,
    message: "Un bel pensiero la lettera di referenza digitale!",
  },
  {
    user: "@alessandro",
    name: "Alessandro",
    avatar: Avatar9,
    message: "Che possa essere un'opportunità per tutti!",
  },
  {
    user: "@veronica",
    name: "Veronica",
    avatar: Avatar10,
    message: "Non e' scontato che in italia ci sia un'app come houseav.",
  },
];

const Testimonials = () => {
  return (
    <div className="pt-12">
      <div className="flex flex-col items-center px-28 pb-16">
        <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl font-semibold border-slate-300/80">
          Testimonials
        </div>
        <div className="text-4xl lg:text-5xl pt-6 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-[#ababab] text-transparent bg-clip-text">
          What our users say
        </div>
      </div>
      <div className="overflow-hidden [mask-image:linear-gradient(to_top,transparent,black,transparent)] h-[750px] mb-12 md:mb-28 lg:mb-36">
        <motion.div
          animate={{
            translateY: "-50%",
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <CardTestimonial
                  key={index}
                  user={testimonial.user}
                  name={testimonial.name}
                  avatar={testimonial.avatar}
                  message={testimonial.message}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
