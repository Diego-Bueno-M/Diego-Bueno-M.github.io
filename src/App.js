import Intro from "./components/Intro";
import About from "./components/About";
import Project from "./pages/Projects";
import Contact from "./components/Contact";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

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
