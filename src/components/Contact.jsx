import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../assets/styles/Contact.css";
import { Card, CardHeader, CardContent, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Select from "@mui/material/Select";
import profilePic from "../assets/images/me.jpg";

class Contact extends React.Component {
  render() {
    return (
      <div className="Contact-container">
        <div className="Contact-header">
          <h2 className="Contact-title">Contact Me</h2>
          <p className="Contact-subtitle">
            Swing by for a cup of coffee, or leave me a message.
          </p>
          <div className="Contact-form-container">
            <img className="Avatar-img" src={profilePic} />
            <form className="Contact-form">
              <InputLabel htmlFor="name-input">Name</InputLabel>
              <Input id="name-input" />

              <InputLabel htmlFor="email-input">Email</InputLabel>
              <Input id="email-input" />

              <InputLabel htmlFor="subject-input">Subject</InputLabel>
              <Select id="subject-input" native>
                <option value="general">General Inquiry</option>
                <option value="consulting">Consulting Services</option>
                <option value="manufacturing">Manufacturing Services</option>
              </Select>

              <InputLabel htmlFor="message-input">Message</InputLabel>
              <TextareaAutosize id="message-input" rowsMin={5} />

              <button className="Contact-submit-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
