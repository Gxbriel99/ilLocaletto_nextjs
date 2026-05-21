import Faq from "./components/blocks/Faq";
import Header from "./components/blocks/Header";
import About from "./components/blocks/About";
import Delivery from "./components/blocks/Delivery";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Delivery />
      <Footer />
     {/* { <Faq /> */}
      {/* <Testimonials /> */}
    </>
  );
}
