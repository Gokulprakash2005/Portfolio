import './App.css';
import Home from './comp/Home';
import About from './comp/About/About';
import Navbar from './comp/navbar/navbar';
import Contact from './comp/Contact/contact';
function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Contact/>
    </>
  );
}

export default App;
