import { useEffect, useState } from 'react';
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MakeProjects from "./components/MakeProjects";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import StickyScrollText from "./components/StickyScrollText";
import Loader from './components/Loader';
import BackToTopButton from "./components/BackToTopButton";
import { MouseTrackerProvider } from '@devdogukan/mouse-tracker';
import CustomTracker from "./components/CustomTracker";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const content = (
    <>
      <Nav />
      {!showContent && <Loader onFinish={() => setShowContent(true)} />}
      {showContent && <Hero showContent={showContent} />}
      <About />
      <StickyScrollText />
      <Skills />
      <MakeProjects />
      <Portfolio />
      <Footer />
      <BackToTopButton />
    </>
  );

  return (
    <>
      {!isMobile ? (
        <MouseTrackerProvider>
          <CustomTracker />
          {content}
        </MouseTrackerProvider>
      ) : (
        content
      )}
    </>
  );
}

export default App;
