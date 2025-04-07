import { useTheme } from "../../themes/ThemeContext";
import { useState, useEffect } from "react";
import "./hero.css";

// Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

function Hero() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className='website-navbar'>
        <div className='logo'>
          <LogoDevIcon style={{ fontSize: "3.5rem" }} />
        </div>
        <div className='pageslinks'>
          <a href='#'>Projetos</a>
          <a href='#'>Tecnologias</a>
          <a href='#'>Sobre mim</a>
        </div>
        <div className='sociallinks'>
          <a href='https://github.com/VictorRoxinho/' target='_blank'>
            <GitHubIcon />
          </a>
          <a href='https://www.linkedin.com/in/jo%C3%A3o-victor-roxinho-0b2431250/' target='_blank'>
            <LinkedInIcon />
          </a>
          <a href='#'>{isDarkMode ? <LightModeIcon onClick={toggleTheme} /> : <DarkModeIcon onClick={toggleTheme} />}</a>
        </div>
      </nav>
      {/* Mobile Navbar */}
      <nav className='mobile-navbar'>
        <div className='menu' onClick={() => handleMenuToggle()}>
          {isMenuOpen ? <MenuOpenIcon style={{ fontSize: "3rem" }} /> : <MenuIcon style={{ fontSize: "3rem" }} />}
        </div>
        <div className={`${isMenuOpen ? "menu-links-open" : "menu-links-close"}`}>
          <LogoDevIcon style={{ fontSize: "3.5rem" }} />
          <a href='#'>Projetos</a>
          <a href='#'>Tecnologias</a>
          <a href='#'>Sobre mim</a>
        </div>
        <div className='sociallinks'>
          <a href='#'>
            <GitHubIcon />
          </a>
          <a href='#'>
            <LinkedInIcon />
          </a>
          <a href='#'>{isDarkMode ? <LightModeIcon onClick={toggleTheme} /> : <DarkModeIcon onClick={toggleTheme} />}</a>
        </div>
      </nav>
      <div className='about'>
        <h1 className='title'>
          Prazer, <span className='saudacao'>Me chamo João!</span>
        </h1>
        <p className='description'>
          Desenvolvedor Front-End, em progresso para o Full Stack. Estou sempre em busca de novos desafios e oportunidades para aprender e crescer na área de desenvolvimento. E vai ser um prazer te
          mostrar um pouco do meu trabalho.
        </p>
        <button className='btn' style={{ marginLeft: "3rem" }}>
          Saber mais
        </button>
      </div>
    </>
  );
}

export default Hero;
