import "./App.css";

import Hero from "./pages/Hero/hero.tsx";
import Body from "./pages/Body/body.tsx";
import { ThemeProvider } from "./themes/ThemeContext.tsx";

function App() {
  return (
    <>
      <ThemeProvider>
        <Hero />
        <Body />
      </ThemeProvider>
    </>
  );
}

export default App;
