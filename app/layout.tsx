import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Head from "next/head";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "houseav.",
  description: "Houseav is a platform for hosting brothers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{String(metadata.title) || "houseav."}</title>
        <meta
          name="description"
          content={
            String(metadata.description) ||
            "Houseav is a platform for hosting brothers."
          }
        />
      </Head>
      <body className={twMerge(dmSans.className, "antialiased")}>
        {children}
      </body>
    </html>
  );
}
