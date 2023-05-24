import React, { useState } from "react";

export default (props) => {
  const { title } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-title" onClick={toggle}>
        <span>{title}</span>
        <img
          className="toggle"
          src="/static/img/right-chevron.png"
          aria-expanded={isOpen}
          alt="Toggle Accordion"
        />
      </div>
      <div className="accordion-content" aria-expanded={!isOpen}>
        {props.children}
      </div>
    </div>
  );
};
