import "./Contacts.scss";
import React from "react";

export default function Contacts() {
  return (
    <div className="contacts">
      <div className="display-content contacts-content">
        <div className="contacts-content__items">
          <h1>Contacts</h1>
          <p>
            <span className="bold-font">Phone Number: </span>604-444-4623
          </p>
          <p>
            <span className="bold-font">Email: </span>qualityflooring@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
