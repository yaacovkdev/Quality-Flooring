import React from "react";
import ServicesBar from "../ServicesBar/ServicesBar";
import "./FlooringBarDesign.scss";

export default function FlooringBarDesign() {
  const services = {
    laminate: {
      title: "Laminate Installations",
      content:
        "We install Laminate of all types of widths with the highest quality the client would like",
    },
    hardwood: {
      title: "Hardwood Installations",
      content:
        "We install Engineered Wooden floors of from all types of lumber with the highest quality of service along with other accomondations",
    },
    vinyl: {
      title: "Vinyl Installations",
      content:
        "We install Engineered Wooden floors of from all types of lumber with the highest quality of service along with other accomondations",
    },
  };

  return (
    <>
      <div className="display-content flooring-design-content">
        <div className="flooring-row">
          <ServicesBar
            Title={services.laminate.title}
            Content={services.laminate.content}
          />
          <ServicesBar Title="" Content="" />
        </div>
        <div className="flooring-row flooring-row--second">
          <ServicesBar Title="" Content="" />
          <ServicesBar
            Title={services.hardwood.title}
            Content={services.hardwood.content}
          />
        </div>

        <div className="flooring-row flooring-row--third">
          <ServicesBar
            Title={services.vinyl.title}
            Content={services.vinyl.content}
          />
          <ServicesBar Title="" Content="" />
        </div>
      </div>
    </>
  );
}
