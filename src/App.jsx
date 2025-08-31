import React, { useEffect, Suspense } from 'react';
import Navbar from './components/Navbar';
import Firstpage from './components/Firstpage';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

// Lazy-loaded components
const Skills = React.lazy(() => import('./components/Skills'));
const Project = React.lazy(() => import('./components/Project'));
const Intern = React.lazy(() => import('./components/Intern'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  useEffect(() => {
    AOS.init({ duration: 100 });
  }, []);

  return (
    <div className="bg-gray-950">
      <Navbar />
      <Firstpage />

      <Suspense fallback={<div className="text-white text-center">Loading Skills...</div>}>
        <Skills />
      </Suspense>

      <Suspense fallback={<div className="text-white text-center">Loading Projects...</div>}>
        <Project />
      </Suspense>

      <Suspense fallback={<div className="text-white text-center">Loading Internships...</div>}>
        <Intern />
      </Suspense>

      <Suspense fallback={<div className="text-white text-center">Loading Contact...</div>}>
        <Contact />
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
