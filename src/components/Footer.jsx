import React from "react";
import "../assets/styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
  faReddit,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
  render() {
    return (
      <div className="container-fluid text-center page-footer font-small blue pt-4 py-3">
        <p className="copyright">
          copyright ©2023 by Greg Bowne || Seatle, WA USA
        </p>
        <p className="Footer-social">
          <a href="https://www.youtube.com/gbowne1" className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a
            href="https://www.facebook.com/gbowne1/"
            className="facebook social"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/gbowne1/"
            className="instagram social"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://twitter.com/gbowne1" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/gregory-bowne-47886591/"
            className="linkedin social"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/gbowne1" className="github social">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.reddit.com/user/gbowne1"
            className="reddit social"
          >
            <FontAwesomeIcon icon={faReddit} size="2x" />
          </a>
          <a href="https://www.twitch.tv/gbowne1" className="twitch social">
            <FontAwesomeIcon icon={faTwitch} size="2x" />
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;
