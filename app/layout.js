import {  Poppins } from "next/font/google";
import "./globals.css";
import TopUpButton from "@/components/TopUpButton/TopUpButton";
import Whatsapp from "@/components/Whatsapp/Whatsapp";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: "Brainhunt Ventures",
  description: "Recruitment Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}  antialiased`}
      >
        
        {children}
        <TopUpButton />
        <Whatsapp />
      </body>
    </html>
  );
}
