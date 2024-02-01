import "./globals.css";
import Navbar from "@/components/NavBar/NavBar.js";
import Footer from "@/components/Footer/Footer";
import ModalNewsLetter from "@/components/NewsLetter/ModalNewsLetter";
import ScrollTopButton from "@/components/ScrollTopButton";

export const metadata = {
  title: "TEDxNTUA-Archive",
  description: "Generated by TEDxNTUA2024-IT",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicons/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicons/favicon-16x16.png",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black font-[Helvetica]">
        <ModalNewsLetter />
        <ScrollTopButton />
        <Navbar />
        <div className="mt-[5rem]"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
