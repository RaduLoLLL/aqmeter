import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithub,
  faDribbble,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="bg-gray-300 flex flex-col items-center p-24">
      <div className="flex space-x-6 text-c777">
        <FontAwesomeIcon className="h-8 w-8" icon={faTwitter} />
        <FontAwesomeIcon className="h-8 w-8" icon={faFacebookF} />
        <FontAwesomeIcon className="h-8 w-8" icon={faInstagram} />
        <FontAwesomeIcon className="h-8 w-8" icon={faGithub} />
        <FontAwesomeIcon className="h-8 w-8" icon={faDribbble} />
        <FontAwesomeIcon className="h-8 w-8" icon={faGooglePlus} />
      </div>
      <div className="flex flex-col space-y-5 items-center md:space-y-0 md:flex-row md:space-x-12 mt-12 text-c777">
        <p>© Setmobile S.R.L. All rights reserved.</p>
        <p className="text-gray-400 hidden md:block">|</p>
        <p>
          Design:{" "}
          <span className=" cursor-pointer underline">Vivamus Donec</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
