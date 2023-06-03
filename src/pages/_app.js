import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "@/styles/globals.css";

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
