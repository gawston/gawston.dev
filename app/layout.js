import { Inter } from "next/font/google";
import "./globals.css";

import Menu from "./components/Menu";
import SmoothScroll from "./components/SmoothScroll";
import PreLoad from "./components/PreLoad";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "gawston | Naruenat Khamwaree",
  description: "ไม่รู้จะใส่อะไร เอาไว้ก่อนล้ากัน" 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <PreLoad /> */}
        <SmoothScroll>
          <Menu />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
