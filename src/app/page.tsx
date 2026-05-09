import styles from "./page.module.css";
import Faq from "./components/blocks/Faq";
import Header from "./components/blocks/Header";
import Service from "./components/blocks/Service";
import Testimonials from "./components/blocks/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Service />
      <Faq />
      {/* <Testimonials /> */}
    </>
  );
}
