import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ParticlesStars from './components/Particles';
import Header from './components/Header';
import Hero from './components/Hero'
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import CalculatorPage from './components/CalculatorPage';


function App() {
  return (
    <Router>
      <main className="overflow-x-hidden text-neutral-300 antialiased
      selection:bg-cyan-300 selection:text-cyan-900 relative min-h-screen">
        <div className='fixed top-0 left-0 -z-10 h-full w-full'></div>
        <div className="absolute top-0 left-0 z-[-2] h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
          <ParticlesStars />
        </div>
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <Hero />
                <About />
                <Technologies />
                <Projects />
              </>
            } />
            <Route path="/calculator" element={
              <>
                <Header />
                <CalculatorPage />
              </>
              } />
          </Routes>
        </div>
      </main>
    </Router>
  )
}

export default App;
