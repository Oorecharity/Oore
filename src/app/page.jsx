import About from "./components/About/About";
import Landing from "./components/Landingpage/Landing";
import Projects from "./components/Projects/Projects";
import { Team } from "./components/Team/Team";
import Accordioncomp from "./components/accordion/Accordioncomp";

// import AOS from 'aos';
// import 'aos/dist/aos.css';

// AOS.init();

export default function Home() {
  return (
    <main>
      <Landing/>
      <Projects/>
      <About/>
      <Accordioncomp/>
      <Team/>
    </main>
  )
}
