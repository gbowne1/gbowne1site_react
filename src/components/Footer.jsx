import React from "react";
import "../assets/styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faYoutube,
	faFacebook,
	faTwitter,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
	render() {
		return (
			<footer className="container-fluid text-center page-footer font-small blue pt-4 py-3">
				<p className="Footer-social">
					<a
						href="https://www.youtube.com/gbowne1"
						className="youtube social"
					>
						<FontAwesomeIcon icon={faYoutube} size="2x" />
					</a>
					<a
						href="https://www.facebook.com/gbowne1/"
						className="facebook social"
					>
						<FontAwesomeIcon icon={faFacebook} size="2x" />
					</a>
					<a
						href="http://www.instagram.com/larnbuildteach"
						className="instagram social"
					>
						<FontAwesomeIcon icon={faInstagram} size="2x" />
					</a>
					<a
						href="https://wwww.twitter.com"
						className="twitter social"
					>
						<FontAwesomeIcon icon={faTwitter} size="2x" />
					</a>
				</p>
			</footer>
		);
	}
}

export default Footer;
