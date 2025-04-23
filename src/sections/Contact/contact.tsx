import "./contact.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  return (
    <>
      <div className='contact-container'>
        <div className='number'>
          <h2>
            Meu contato:
            <br /> <span className='contact-info'>(71) 9 8151-1131</span>
          </h2>
        </div>
        <div className='email'>
          <h2>
            Email:
            <br /> <span className='contact-info'>jvcroxinho@outlook.com</span>
          </h2>
        </div>
        <div className='social-links-footer'>
          <a href='https://github.com/VictorRoxinho' target='_blank'>
            <GitHubIcon style={{ fontSize: "4rem" }} />
          </a>
          <a href='https://www.linkedin.com/in/jo%C3%A3o-victor-roxinho-0b2431250/' target='_blank'>
            <LinkedInIcon style={{ fontSize: "4rem" }} />{" "}
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
