import "./Contact.css";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content-wrapper">
        <h2>Contact</h2>
        <div className="contact-section-wrapper">
          <div className="email-section">
            <h3>Send me a message</h3>
            <form
              action="https://public.herotofu.com/v1/d7adfa90-62b5-11ee-94f4-efb6cbd494ee"
              method="post"
              accept-charset="UTF-8"
            >
              <input
                name="Name"
                id="name"
                placeholder="Name"
                type="text"
                required
              />
              <input
                name="Email"
                id="email"
                placeholder="E-mail"
                type="email"
                required
              />
              <textarea
                name="message"
                id="message"
                placeholder="Your message"
                required
              ></textarea>
              <input id="send-message" type="submit" value="Send" />
              <div
                style={{
                  "text-indent": "-99999px",
                  "white-space": "nowrap",
                  overflow: "hidden",
                  position: "absolute",
                }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="_gotcha"
                  tabindex="-1"
                  autocomplete="off"
                />
              </div>
            </form>
          </div>
          <div className="links-section">
            <h3>Socials</h3>
            <ul className="link-list">
              <li>
                <a
                  href="https://github.com/Gwazza23"
                  rel="noreferrer"
                  target="blank_"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Gwazza23"
                  rel="noreferrer"
                  target="blank_"
                >
                  <AiFillLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Gwazza23"
                  rel="noreferrer"
                  target="blank_"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Gwazza23"
                  rel="noreferrer"
                  target="blank_"
                >
                  <AiFillFacebook />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
