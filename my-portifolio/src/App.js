import './App.css';

import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Hobbies from './my-hobbies/Hobbies';
import Navbar from './Navbar/Navbar';
import Skills from './Skills/Skills';


function App() { 
  return (
    
<Router>
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <Hobbies />
      <Contact />
      <Footer /> 
    </div>
  </Router>

    
  );
}

export default App;
