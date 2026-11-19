
import "./globals.css";
import Scrollprogress from "../src/components/Scrollprogress";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

export const metadata = {
  title: "Clovenza Tech",
  description: "Transforming ideas into impactful solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">

        <Scrollprogress />

        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
