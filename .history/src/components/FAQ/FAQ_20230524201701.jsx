import React, { useState } from "react";

function FAQ(props) {
  const { title } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordion">
      <div className="accordion-title">
        <span>{title}</span>
      </div>
      <div className="accordion-content">{props.children}</div>
    </div>
  );
}

export default FAQ;
