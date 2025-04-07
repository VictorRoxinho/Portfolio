import "./aboutMe.css";

function AboutMe() {
  return (
    <div className='about-container'>
      <h1>Sobre mim</h1>
      <div className='timeline'>
        <div className='timeline-item'>
          <h2>2022</h2>
          <div className='line'>
            <div></div>
            <div className='circle'></div>
            <div className='end-line'></div>
          </div>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
        </div>
        <div className='timeline-item'>
          <h2>2023</h2>
          <div className='line'>
            <div className='start-line'></div>
            <div className='circle'></div>
            <div className='end-line'></div>
          </div>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
        </div>
        <div className='timeline-item'>
          <h2>2024</h2>
          <div className='line'>
            <div className='start-line'></div>
            <div className='circle'></div>
            <div className='end-line'></div>
          </div>
          <h3>Início da faculdade de Análise e Desenvolvimento de Sistemas. Foco no ciclo básico do front-end: Html, Css e JavaScript</h3>
        </div>
        <div className='timeline-item'>
          <h2>2025</h2>
          <div className='line'>
            <div className='start-line'></div>
            <div className='circle'></div>
            <div></div>
          </div>
          <h3>Desenvolvimento na linguagem de TypeScript, experiência real num time para desenvolvimento de sites</h3>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
