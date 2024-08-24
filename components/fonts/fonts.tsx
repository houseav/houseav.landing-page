// src/fonts.js
import localFont from "next/font/local";

export const optiBubbleDoubleBold = localFont({
  src: [
    {
      path: "../../public/assets/fonts/OPTIBubbleDoubleBold/OPTIBubbleDoubleBold.otf",
      weight: "normal",
      style: "normal",
    },
  ],
  variable: "--font-optiBubbleDoubleBold",
});

export const patinioBasica = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Patinio-Basica/PatinioBasica.ttf",
      weight: "normal",
      style: "normal",
    },
  ],
  variable: "--font-patinioBasica",
});

export const rollcage = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Rollcage/Rollcage.otf",
      weight: "normal",
      style: "normal",
    },
  ],
  variable: "--font-rollcage",
});
