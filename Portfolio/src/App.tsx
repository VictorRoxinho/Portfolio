import "./App.css";

import Hero from "./sections/Hero/hero.tsx";
import Body from "./sections/Body/body.tsx";
import About from "./sections/About Me/aboutMe.tsx";
import Contact from "./sections/Contact/contact.tsx";
import { ThemeProvider } from "./themes/ThemeContext.tsx";

function App() {
  return (
    <ThemeProvider>
      <div>
        {/* Cada seção recebe um ID único */}
        <section id='hero'>
          <Hero />
        </section>
        <section id='body'>
          <Body />
        </section>
        <section id='about'>
          <About />
        </section>
        <section id='contact'>
          <Contact />
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
