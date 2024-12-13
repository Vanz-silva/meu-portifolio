import { useEffect } from "react";

import initAOS from "@/utils/aos";
import "@/App/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Componentes principais
import Header from "@/App/components/Header";
import Footer from "@/App/components/Footer";
import About from "@/App/sections/About";
import Skills from "@/App/sections/Skills";
import Projects from "@/App/sections/Projects";

function MyApp() {
  useEffect(() => {
    initAOS(); // Inicializa o AOS
  }, []);

  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
