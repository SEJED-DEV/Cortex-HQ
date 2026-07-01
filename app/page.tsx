import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bots from "./components/Bots";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Bots />
        <Services />
      </main>
      <Footer />
    </>
  );
}
