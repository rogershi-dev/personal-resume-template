import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import WorkExperience from './Components/WorkExperience';
import ProgrammingProjects from './Components/ProgrammingProjects';
import Education from './Components/Education';
import SkillSet from './Components/SkillSet';

function App() {
  return (
    <div style={{margin:"10px auto", width:"700px"}}>
      
      <Header />

      <WorkExperience />

      <ProgrammingProjects />

      <Education />

      <SkillSet />

    </div>
  );
}

export default App;
