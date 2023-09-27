import About from "./components/About/About";
import Landing from "./components/Landingpage/Landing";
import Projects from "./components/Projects/Projects";

export default function Home() {
  return (
    <main>
      <Landing/>
      <Projects/>
      <About/>
    </main>
  )
}
