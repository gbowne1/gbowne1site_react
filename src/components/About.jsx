import React from "react";
import "../assets/styles/About.css";
import profilePic from "../assets/images/me.jpg";

class About extends React.Component {
  render() {
    return (
      <div className="About-container">
        <div className="About-header">
          <h3 className="About-title">About Me</h3>
          <h2>About Me</h2>
          <img src={profilePic} alt="Headshot of Gregory Bowne"></img>
          <p>
            Hi there! my name is Gregory Bowne aka gbowne1. I am a 44 year old
            small business owner in the manufacturing sector. I own a machine
            and fabrication / engineering workshop with about 250 employees as
            of 4/30/2021. I also do manufacturing consulting as well as ERP &
            MRP software consutling for the major ERP and MRP software packages
            for regional manufacturing compaines and small machine shops.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
