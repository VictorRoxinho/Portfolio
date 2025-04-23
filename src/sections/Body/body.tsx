import "./body.css";

function Body() {
  return (
    <div className='project-container'>
      <h1>Projetos</h1>
      <div className='projects'>
        <div className='project-card'>
          <img src='/MovieHub-banner.png' alt='project-banner-1' className='project-card-banner' />
          <h2>Movie Hub</h2>
          <h3 style={{ fontSize: "1.3rem" }}>Site desenvolvido com React e TypeScript e integração com API do TMDb, que permite aos usuários explorar filmes e séries de TV de forma intuitiva.</h3>
          <a href='https://movie-hub-flax.vercel.app/' target='_blank'>
            <button className='btn'>Clique aqui!</button>
          </a>
        </div>
        <div className='project-card'>
          <img src='/project-card-banner.png' alt='project-banner-1' className='project-card-banner' />
          <h2>Projeto 2</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
          <a href='#'>
            <button className='btn'>Clique aqui!</button>
          </a>
        </div>
        <div className='project-card'>
          <img src='/project-card-banner.png' alt='project-banner-1' className='project-card-banner' />
          <h2>Projeto 3</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
          <a href='#'>
            <button className='btn'>Clique aqui!</button>
          </a>
        </div>
        <div className='project-card'>
          <img src='/project-card-banner.png' alt='project-banner-1' className='project-card-banner' />
          <h2>Projeto 4</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
          <a href='#'>
            <button className='btn'>Clique aqui!</button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Body;
