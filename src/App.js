import Intro from "./components/Intro";
import About from "./components/About";
import Project from "./pages/section/Projects";
import Contact from "./components/Contact";
import Header from "./pages/section/Header";

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
