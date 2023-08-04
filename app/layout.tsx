import "@/styles/globals.css";
import "@/styles/navbar.css";
import "@/styles/home.css"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     <head>
      <link rel="icon" href="/assets/logo.png"/>
      </head> 
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
