import React from "react";
import "./index.scss"
const SectionHeader = ({title,headerTopContent}) => {
  return (
    <div className="section-header">
      <span>{headerTopContent}</span>
      <h3>{title}</h3>
    </div>
  );
};

export default SectionHeader;
