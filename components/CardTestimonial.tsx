import React from "react";
import Image from "next/image";

interface CardTestimonialProps {
  avatar: any;
  message: any;
  user: any;
  name: any;
}

export default function CardTestimonial({
  avatar,
  message,
  user,
  name,
}: CardTestimonialProps) {
  return (
    <div className="shadow-xl w-[310px] rounded-2xl p-8">
      <div className="font-medium pb-4">{message}</div>
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <Image
            src={avatar}
            alt="avatar"
            layout="fixed"
            width={48}
            height={48}
            className="rounded-full"
          />
        </div>
        <div>
          <div className="font-semibold">{name}</div>
          <div>{user}</div>
        </div>
      </div>
    </div>
  );
}
