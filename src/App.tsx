import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="container">
        {/* add page content here */}
      </main>
      <Footer />
    </>
  )
}

export default App
