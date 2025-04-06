import "./App.css";

import Hero from "./sections/Hero/hero.tsx";
import Body from "./sections/Body/body.tsx";
import About from "./sections/About Me/aboutMe.tsx";
import Contact from "./sections/Contact/contact.tsx";
import { ThemeProvider } from "./themes/ThemeContext.tsx";

function App() {
  return (
    <>
      <ThemeProvider>
        <Hero />
        <Body />
        <About />
        <Contact />
      </ThemeProvider>
    </>
  );
}

export default App;
