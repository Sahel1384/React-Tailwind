import Hero from "./Components/Hero/Hero";
import Awards from "./Components/Awards/Awards";
import About from "./Components/About/About";
import Works from "./Components/Works/Works";
import Flexible from "./Components/Flexible/Flexible";
import Clients from "./Components/Clients/Clients";
import FAQ from "./Components/FAQ/FAQ";
import Recent from "./Components/Recent/Recent";
import Contact from "./Components/Contact/Contact";
import GoToTop from "./Components/GoToTop/GoToTop";
function Layout() {
  return (
    <div>
      <Hero />
      <Awards />
      <About />
      <Works />
      <Flexible />
      <Clients />
      <FAQ />
      <Recent />
      <Contact />
      <GoToTop />
    </div>
  );
}

export default Layout;
