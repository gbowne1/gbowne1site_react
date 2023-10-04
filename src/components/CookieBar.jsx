import "../assets/styles/CookieBar.css";
import CookieConsent from "react-cookie-consent";

import { useId } from "react";

function CookieBar() {
  const id = useId();
  return (
    <div className="CookieBar-container">
      <div className="CookieBar-header">
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          cookieName="my-cookie-accept"
          expires={150}
          buttonId={`cookieButton-${id}`}
        >
          This website uses cookies to enhance the user experience. By
          continuing to browse the site, you are agreeing to our use of cookies.
        </CookieConsent>
      </div>
    </div>
  );
}



export default CookieBar;
