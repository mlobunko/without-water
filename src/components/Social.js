import React from "react";

export const Social = ({ social, fontClassLibraryIcons }) => (
  <React.Fragment>
    <h5>Social</h5>
    <div className="social">
      {social.map((el, id) => (
        <div key={id} className="social__icon">
          <a
            href={el.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={el.label}
          >
            <i className={fontClassLibraryIcons[el.label]} />
          </a>
        </div>
      ))}
    </div>
  </React.Fragment>
);
