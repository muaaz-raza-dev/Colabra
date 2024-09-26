import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google'
import RecoilProvider from "@/components/providers/recoil-provider";
import Navbar from "@/components/global/navbar";

const roboto = Roboto({
  weight: ['400', '700'],
  style: 'normal', 
  variable:"--font-regular",
  subsets: ['latin'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: "Colabra",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <RecoilProvider>
        <Navbar/>
        {children}
        </RecoilProvider>
      </body>
    </html>
  );
}
