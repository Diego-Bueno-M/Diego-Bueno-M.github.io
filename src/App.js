import Intro from "./components/Intro";
import About from "./components/About";
import Project from "./pages/section/Projects";
import Contact from "./components/Contact";
import Header from "./pages/section/Header";
import Footer from "./pages/section/Footer";

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
