import React from "react";
import { Social } from "./Social";

export const ProfileContent = ({
  city,
  languages,
  social,
  fontClassLibraryIcons
}) => (
  <div className="container-max-width profile">
    <div className="image-user" />
    <div>
      <span>
        <i className="fas fa-map-marker-alt" />
        {` ${city}`}
      </span>
    </div>
    <div>
      <span>
        <i className="fas fa-globe" />
        {languages.map((language, i) => <span key={i}> {language} </span>)}
      </span>
    </div>
    <Social social={social} fontClassLibraryIcons={fontClassLibraryIcons} />
  </div>
);
