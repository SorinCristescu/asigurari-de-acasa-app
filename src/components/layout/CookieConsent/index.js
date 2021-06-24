import React from 'react';
import CookieConsent, {
  Cookies,
  getCookieConsentValue,
} from 'react-cookie-consent';

const GDPR = ({ setPointer }) => {
  return (
    <CookieConsent
      overlay
      location="bottom"
      cookieName="myAwesomeCookieName2"
      onAccept={() => {
        // alert('Accept was triggered by clicking the Accept button');
        setPointer(true);
      }}
      onDecline={() => {
        // alert('nay!');
        setPointer(true);
      }}
      expires={150}
      buttonText="Am inteles si sunt de accord!!"
      declineButtonText="Nu sunt de acord!"
      flipButtons
      enableDeclineButton
      style={{
        padding: '20px',
        height: '300px',
        background: 'rgba(0, 0, 0, 0.76)',
        color: '#FFF9F2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '16px',
        fontWeight: 'bold',
        zIndex: '-100',
      }}
      buttonStyle={{
        width: '300px',
        padding: '10px 24px',
        color: '#FFF9F2',
        background: '#4D4DFF',
        fontSize: '16px',
        fontWeight: 'bold',
        height: '50px',
      }}
      declineButtonStyle={{
        width: '300px',
        padding: '10px 24px',
        height: '50px',
        backgroundColor: '#0D0D0D',
        color: '#FFF9F2',
        fontSize: '16px',
        fontWeight: 'bold',
      }}
      contentStyle={{ textAlign: 'center', width: '70%' }}
    >
      Acest website foloseste cookies pentru a imbunatati experienta
      vizitatorilor!
      {/* <span style={{ fontSize: '10px' }}>This bit of text is smaller :O</span> */}
    </CookieConsent>
  );
};

export default GDPR;
