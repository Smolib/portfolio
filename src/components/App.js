import { useEffect, useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 650;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
     window.addEventListener("resize", handleResizeWindow);
     return () => {
       window.removeEventListener("resize", handleResizeWindow);
     };
   }, []);
  return (
    <>
      {width > breakpoint ? 
      <>
      <Header />
      <Nav />
      </> 
      :
      <>
      <Nav />
      <Header />
      </>}
      <main>
        <About />
        <Skills />
        <Education />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
