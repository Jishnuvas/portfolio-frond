import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a
              href="https://www.instagram.com/be_a_salvatore/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
            </a>
            <a
              href="https://www.instagram.com/be_a_salvatore/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </a>
            <a
              href="https://www.instagram.com/be_a_salvatore/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a>
            <a
              href="https://www.instagram.com/be_a_salvatore/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
