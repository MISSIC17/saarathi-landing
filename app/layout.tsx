import "../styles/globals.css";
import "../styles/navbar.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "We-Saarathi",
  description:
    "We-Saarathi is a recently established organization founded by zealous young Nepalese socio- tech visionaries who are committed to using their expertise and knowledge to benefit their society.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
