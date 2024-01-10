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
      <footer className="container-fluid text-center page-footer font-small blue pt-4 py-3">
        <p className="copyright">Copyright ©2023 by Greg Bowne</p>
        <div className="Footer-social">
          <a
            href="https://www.youtube.com/gbowne1"
            aria-label="Visit gbowne1 youtube account"
            className="youtube social"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a
            href="https://www.facebook.com/gbowne1/"
            aria-label="Visit gbowne1 facebook account"
            className="facebook social"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/gbowne1/"
            aria-label="Visit gbowne1 instagram account"
            className="instagram social"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://twitter.com/gbowne1"
            aria-label="Visit gbowne1 twitter account"
            className="twitter social"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/gregory-bowne-47886591/"
            aria-label="Visit gbowne1 linkedin account"
            className="linkedin social"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/gbowne1"
            aria-label="Visit gbowne1 github account"
            className="github social"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.reddit.com/user/gbowne1"
            aria-label="Visit gbowne1 reddit account"
            className="reddit social"
          >
            <FontAwesomeIcon icon={faReddit} size="2x" />
          </a>
          <a
            href="https://www.twitch.tv/gbowne1"
            aria-label="Visit gbowne1 twitch account"
            className="twitch social"
          >
            <FontAwesomeIcon icon={faTwitch} size="2x" />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
