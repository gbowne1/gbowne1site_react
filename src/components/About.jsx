import React from "react";
import "../assets/styles/About.css";
import profilePic from "../assets/images/me.jpg";

import { Card, CardHeader, CardContent, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import TextareaAutosize from "@mui/base/TextareaAutosize";

class About extends React.Component {
  render() {
    return (
      <div className="About-container">
        <div className="About-header">
          <h3 className="About-title">About Me</h3>
          <h2>About Me</h2>
          <h5>Photo of me:</h5>
          <img src={profilePic}></img>
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
