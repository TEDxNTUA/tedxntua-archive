import "./globals.css";
import Navbar from "@/components/NavBar/NavBar.js";
import ModalWrapper from "@/components/NewsLetterModal/ModalWrapper";
import ScrollTopButton from "@/components/ScrollTopButton";

export const metadata = {
  title: "TEDxNTUA-Archive",
  description: "Generated by TEDxNTUA2024-IT",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/api/proxy-image?id=18_MFRFRddQcsiJSxVL1od8eVVj3B-NSy",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/api/proxy-image?id=15fd2NZl98k3rRpbk3uFQvnXO0C9bZJtp",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black font-[Helvetica]">
        {/* <ModalWrapper />  */}
        <div>
          <ScrollTopButton />
        </div>
        <Navbar />
        <div className="mt-[65px]"></div>
        {children}
      </body>
    </html>
  );
}
