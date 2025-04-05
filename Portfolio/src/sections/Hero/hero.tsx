import { useTheme } from "../../themes/ThemeContext";
import "./hero.css";

// Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LogoDevIcon from "@mui/icons-material/LogoDev";

function Hero() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <nav>
        <div className='logo'>
          <LogoDevIcon style={{ fontSize: "3.5rem" }} />
        </div>
        <div className='pageslinks'>
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
          Olá, me chamo <span className='name'>João</span> {/* Colocar efeito de escrever */}
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
