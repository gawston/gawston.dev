import { Inter } from "next/font/google";
import "./globals.css";

import Menu from "./components/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "gawston | Naruenat Khamwaree",
  description: "Hello everyone, I'm Naruenat Khamwaree. I'm a student at King Mongkut's University of Technology North Bangkok." 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
