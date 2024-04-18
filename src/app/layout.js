import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/common/Footer";
import BackToTop from "@/components/common/BackToTop";
import Navbar from "@/components/common/Navbar/Navbar";

export const metadata = {
  metadataBase: "https://nuport-next.vercel.app",
  title: "Nuport",
  description: "Cloud supply chain for e-commerce & enterprise",
  openGraph: {
    title: "Nuport",
    description: "Cloud supply chain for e-commerce & enterprise",
    images: ["/meta-img.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-plus bg-darkBlue">
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
