import React from 'react';
import CookieConsent from 'react-cookie-consent';

function CookieAccept() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName="my-cookie-accept"
      expires={150}
    >
      This website uses cookies to enhance the user experience. By continuing to browse the site, you are agreeing to our use of cookies.
    </CookieConsent>
  );
}

export default CookieAccept;
