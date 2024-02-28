import { Poppins, Jost } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const grind = localFont({
  src: "../public/assets/fonts/Grind_Demolished.ttf",
  variable: "--font-grind",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jost",
});

export const metadata = {
  title: "Multiplayer on-chain action game - Katana Inu",
  description: "Multiplayer on-chain action game - Katana Inu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${grind.variable} ${jost.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
