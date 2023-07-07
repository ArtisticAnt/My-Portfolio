import React from 'react';
import { Button } from 'reactstrap';
import { socialLinks } from '../portfolio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTelegram, faSkype } from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {
  return (
    <div className="btn-wrapper text-lg">
      {socialLinks.telegram && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="twitter"
          rel="noopener"
          aria-label="Telegram"
          href={socialLinks.telegram}
          target="_blank"
        >
          <span className="btn-inner--icon">
            {/* <i className="fa fa-telegram" /> */}
            <FontAwesomeIcon icon={faTelegram} />
          </span>
        </Button>
      )}
      {socialLinks.discord && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="discord"
          href={socialLinks.discord}
          rel="noopener"
          aria-label="Discord"
          target="_blank"
        >
          <span className="btn-inner--icon">
            {/* <i className="fa fa-discord" /> */}
            <FontAwesomeIcon icon={faDiscord} />
          </span>
        </Button>
      )}
      {socialLinks.skype && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="skype"
          href={socialLinks.skype}
          target="_blank"
          rel="noopener"
          aria-label="Skype"
        >
          <span className="btn-inner--icon">
            {/* <i className="fa fa-skype" /> */}
            <FontAwesomeIcon icon={faSkype} />
          </span>
        </Button>
      )}
      {/* {socialLinks.twitter && (
        <Button
          className="btn-icon-only rounded-circle"
          color="twitter"
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener"
          aria-label="Twitter"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-twitter" />
          </span>
        </Button>
      )} */}
    </div>
  );
};

export default SocialLinks;
