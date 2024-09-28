import React from 'react';
import './App.css';
import Indexes from './comp/indexpage/hello';
import About from './comp/about/about';
import Education_Section from './comp/education/education';
import Experience_Section from './comp/experience/exp';
import Projects_Section from './comp/projects/project';
import Certifications_Section from './comp/certficates/certficates';
import Contact_Section from './comp/contact/contact';
import Skills_Section from './comp/skills/skills';
function App() {
  return (
    <>
    <Indexes/>
    <About/>
    <Education_Section/>
    <Experience_Section/>
    <Projects_Section />
    <Certifications_Section />
    <Skills_Section/>
    <Contact_Section/>
    </>
  );
}

export default App;
