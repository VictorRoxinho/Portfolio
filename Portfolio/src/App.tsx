import "./App.css";

import Hero from "./pages/Hero/hero.tsx";
import { ThemeProvider } from "./themes/ThemeContext.tsx";

function App() {
  return (
    <>
      <ThemeProvider>
        <Hero />
      </ThemeProvider>
    </>
  );
}

export default App;
