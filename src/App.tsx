import './App.css'
import Particles from './components/Particles'
import Header from './components/Header'

function App() {

  return (
    <main className="overflow-x-hidden text-neutral-300 antialiased
    selection:bg-cyan-300 selection:text-cyan-900">
      <div className="absolute inset-0 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <Header />
      </div>
      <Particles />
    </main>
  )
}

export default App
