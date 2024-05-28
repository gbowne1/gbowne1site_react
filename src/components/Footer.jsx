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
import "../assets/styles/Footer.css";

const socialLinks = [
  {
    platform: "YouTube",
    href: "https://www.youtube.com/gbowne1",
    icon: faYoutube,
  },
  {
    platform: "Facebook",
    href: "https://www.facebook.com/gbowne1/",
    icon: faFacebook,
  },
  {
    platform: "Instagram",
    href: "https://www.instagram.com/gbowne1/",
    icon: faInstagram,
  },
  { platform: "Twitter", href: "https://twitter.com/gbowne1", icon: faTwitter },
  {
    platform: "LinkedIn",
    href: "https://www.linkedin.com/in/gregory-bowne-47886591/",
    icon: faLinkedin,
  },
  { platform: "GitHub", href: "https://github.com/gbowne1", icon: faGithub },
  {
    platform: "Reddit",
    href: "https://www.reddit.com/user/gbowne1",
    icon: faReddit,
  },
  { platform: "Twitch", href: "https://www.twitch.tv/gbowne1", icon: faTwitch },
];

const Footer = () => {
  return (
    <footer className="container-fluid text-center page-footer font-small blue pt-4 py-3">
      <p className="copyright">Copyright © 2024 by Greg Bowne</p>
      <div className="Footer-social">
        {socialLinks.map(({ platform, href, icon }, index) => (
          <a
            key={index}
            href={href}
            aria-label={`Visit gbowne1 ${platform} account`}
            className={`${platform.toLowerCase()} social`}
          >
            <FontAwesomeIcon icon={icon} size="2x" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
