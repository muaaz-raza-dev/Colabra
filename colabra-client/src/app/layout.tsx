import type { Metadata } from "next";
import "./globals.css";
import RecoilProvider from "@/components/providers/recoil-provider";
import Navbar from "@/components/global/navbar";
import  { Toaster } from 'react-hot-toast';




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
      <head>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </head>
      <body className={`antialiased`}>
      <Toaster/>
        <RecoilProvider>
        {/* <Navbar/> */}
        {children}
        </RecoilProvider>
      </body>
    </html>
  );
}
