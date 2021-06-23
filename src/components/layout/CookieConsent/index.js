import React from 'react';
import CookieConsent, {
  Cookies,
  getCookieConsentValue,
} from 'react-cookie-consent';
import styles from './GDPR.module.css';

const GDPR = () => {
  return (
    <CookieConsent
      overlay
      location="bottom"
      buttonText="Am inteles si sunt de accord!!"
      buttonStyle={{
        padding: '10px 24px',
        color: '#FFF9F2',
        background: '#4D4DFF',
        fontSize: '16px',
        fontWeight: 'bold',
        height: '50px',
      }}
      declineButtonText="Nu sunt de acord!"
      declineButtonStyle={{
        padding: '10px 24px',
        height: '50px',
        backgroundColor: '#0D0D0D',
        color: '#FFF9F2',
        fontSize: '16px',
        fontWeight: 'bold',
      }}
      cookieName="myAwesomeCookieName2"
      onAccept={() => {
        alert('Accept was triggered by clicking the Accept button');
      }}
      enableDeclineButton
      onDecline={() => {
        alert('nay!');
      }}
      style={{
        padding: '0 100px',
        height: '100px',
        background: '#FFF9F2',
        color: '#0D0D0D',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '18px',
        fontWeight: 'bold',
      }}
      expires={150}
    >
      Acest website foloseste cookies pentru a imbunatati experienta
      vizitatorilor!
      {/* <span style={{ fontSize: '10px' }}>This bit of text is smaller :O</span> */}
    </CookieConsent>
  );
};

export default GDPR;
