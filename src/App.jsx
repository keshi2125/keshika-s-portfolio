import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Firstpage from './components/Firstpage';
import About from './components/About';
import Skills from './components/Skills';
import Project  from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 100 });
  }, []);

  return (
    <div className="bg-gray-950">
      <Navbar/>
      <Firstpage />
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
