import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../assets/styles/Contact.css";
import { Card, CardHeader, CardContent, Paper } from "@mui/material"; // Importing Card and Paper
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Select from "@mui/material/Select";
import profilePic from "../assets/images/me.jpg";

class Contact extends React.Component {
  render() {
    return (
      <div className="Contact-container">
        <Header /> {/* Using the Header component */}
        <div className="Contact-header">
          <h2 className="Contact-title">Contact Me</h2>
          <p className="Contact-subtitle">
            Swing by for a cup of coffee, or leave me a message.
          </p>
          <div className="Contact-form-container">
            <img
              className="Avatar-img"
              alt="Headshot of Gregory Bowne"
              src={profilePic}
            />
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
              <TextareaAutosize id="message-input" />
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />{" "}
              {/* Using the TextField component */}
              <Card variant="outlined">
                {" "}
                {/* Using the Card component */}
                <CardHeader title="Contact Information" />
                <CardContent>
                  <p>Name: John Doe</p>
                  <p>Email: john.doe@example.com</p>
                  <p>Phone: 123-456-7890</p>
                </CardContent>
              </Card>
              <Paper variant="outlined">
                {" "}
                {/* Using the Paper component */}
                <p>Office Address:</p>
                <p>123 Main St.</p>
                <p>Anytown, USA 12345</p>
              </Paper>
              <button className="Contact-submit-button">Submit</button>
            </form>
          </div>
        </div>
        <Footer /> {/* Using the Footer component */}
      </div>
    );
  }
}

export default Contact;
