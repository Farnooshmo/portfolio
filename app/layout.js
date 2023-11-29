import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar.js";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Farnoosh Moayeri",
  description: "Farnoosh Moayeri portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" className="z-50" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
