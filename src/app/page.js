import Header from "../App/components/Header";
import Footer from "../App/components/Footer";
import About from "../App/sections/About";
import Skills from "../App/sections/Skills";
import Projects from "../App/sections/Projects";
import 'bootstrap/dist/css/bootstrap.min.css'; 
 
export default function Home() {
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
