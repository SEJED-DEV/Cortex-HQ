import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bots from "./components/Bots";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Bots />
        <Services />
        <Footer />
      </main>
    </>
  );
}
