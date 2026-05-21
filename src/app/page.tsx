import About from "./components/blocks/About";
import Delivery from "./components/blocks/Delivery";
import Header from "./components/blocks/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Delivery />
     {/* { <Faq /> */}
      {/* <Testimonials /> */}
    </>
  );
}
