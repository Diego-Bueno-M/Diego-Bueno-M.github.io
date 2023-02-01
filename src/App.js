import Intro from "./components/Intro";
import About from "./components/About";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <div>
      <Intro/>
      <About/>
      <ProjectCard
        url="https://github.com/Diego-Bueno-M/Project-Solar-System"
        stacks={['react', 'redux', 'html']}
      />
    </div>
  );
}

export default App;
