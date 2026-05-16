import styles from "./page.module.css";
import Faq from "./components/blocks/Faq";
import Header from "./components/blocks/Header";
import About from "./components/blocks/About";
import Delivery from "./components/blocks/Delivery";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Delivery />
      <Faq />
      {/* <Testimonials /> */}
    </>
  );
}
