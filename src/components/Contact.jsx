import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../assets/styles/Contact.css";
import { Card, CardHeader, CardContent, Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Select from '@mui/material/Select';

class Contact extends React.Component {
	render() {
		return (
			<div className="Contact-container">
				<div className="Contact-header">
					<h2 className="Contact-title">Contact Me</h2>
					<p className="">
						Swing by for a cup of coffee, or leave me a message.
					</p>
					<img
						className="Avatar-img"
						src="./src/assets/images/me.jpeg"
					/>
					<div>
						<form className="Form-contact">
							<InputLabel />
							<Input />
							<InputLabel />
							<Select />
							<InputLabel />
							<Input />
							<TextareaAutosize />
							<Input />
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
