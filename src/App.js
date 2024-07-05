import './App.css';
import Home from './comp/Home';
import About from './comp/About/About';
import Navbar from './comp/navbar/navbar';
import Contact from './comp/Contact/contact';
import Resume from './comp/Resume/resume';
function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Contact/>
    <Resume/>
    </>
  );
}

export default App;
