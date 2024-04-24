// Importing global styles
import "./globals.css";

// Importing slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing common components
import Footer from "@/components/common/Footer";
import BackToTop from "@/components/common/BackToTop";
import Navbar from "@/components/common/Navbar/Navbar";

// Metadata for the website
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

// Root layout component
export default function RootLayout({ children }) {
  return (
    // HTML document structure
    <html lang="en">
      <body className="font-plus">
        {/* Navbar component */}
        <Navbar />
        
        {/* Render children components */}
        {children}
        
        {/* Footer component */}
        <Footer />
        
        {/* BackToTop component */}
        <BackToTop />
      </body>
    </html>
  );
}
