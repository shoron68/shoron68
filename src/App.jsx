import About from "./components/About"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import MakeProjects from "./components/MakeProjects"
import Nav from "./components/Nav"
import Portfolio from "./components/Portfolio"
import Skills from "./components/Skills"
import StickyScrollText from "./components/StickyScrollText"
import { useState } from 'react';
import Loader from './components/Loader';

function App() {
   const [showContent, setShowContent] = useState(false);

  return (
    <>
    
    <Nav/>
    {!showContent && <Loader onFinish={() => setShowContent(true)} />}
      {showContent && <Hero showContent={showContent} />}
      
     
     <About/>
     <StickyScrollText/>
     <Skills/>
     <MakeProjects/>
     <Portfolio/>
     <Footer/>
    </>
  )
}

export default App
