import React from "react";
import "../assets/styles/Gallery.css";

class Gallery extends React.Component {
	render() {
		return (
			<div className="Gallery-container">
				<div className="Gallery-header">
					<h3 className="Gallery-title">Gallery</h3>
					<img className="Gallery-image"></img>
				</div>
			</div>
		);
	}
}

export default Gallery;
