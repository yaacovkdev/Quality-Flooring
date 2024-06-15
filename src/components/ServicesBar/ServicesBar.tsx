import React from "react";
import "./ServicesBar.scss";

export default function ServicesBar({Title, Content} : {Title: string, Content: string}) {
  return (
    <div className="services-bar">
      <div className="services-body">
        <h1>{Title}</h1>
      </div>
      <p>{Content}</p>
    </div>
  );
}
