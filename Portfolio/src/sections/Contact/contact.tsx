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
          <a href='#'>
            <GitHubIcon style={{ fontSize: "4rem" }} />
          </a>
          <a href='#'>
            <LinkedInIcon style={{ fontSize: "4rem" }} />{" "}
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
