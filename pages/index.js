import Header from "../components/Header";
import Main from "../components/main";
import ContactSection from "../components/contactSection";
import TimeMap from "../components/timeMap";
import Projects from "../components/animatedComps/projects";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <TimeMap />
      <Projects />
      <ContactSection />
    </>
  );
}
