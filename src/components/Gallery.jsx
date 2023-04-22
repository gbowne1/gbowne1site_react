import React from "react";
import Slider from "react-slick";
import "../assets/styles/Gallery.css";
import image1 from "../assets/images/seattle.jpg";
import image2 from "../assets/images/me.jpg";
import image3 from "../assets/images/coding_channels_resize_md.jpg";

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
  };
  

  class Gallery extends React.Component {
	render() {
	  return (
		<div className="Gallery-container">
		  <div className="Gallery-header">
			<h3 className="Gallery-title">Gallery</h3>
			<Slider {...settings}>
  <div>
    <img className="Gallery-image" src={image1} alt="Image 1" />
    <p className="Gallery-description">View of Seattle skyline from Kerry Park</p>
  </div>
  <div>
    <img className="Gallery-image" src={image2} alt="Image 2" />
    <p className="Gallery-description">Selfie taken during a hike in the Cascades</p>
  </div>
  <div>
    <img className="Gallery-image" src={image3} alt="Image 3" />
    <p className="Gallery-description">Coding on the couch with the best programming channels</p>
  </div>
</Slider>

		  </div>
		</div>
	  );
	}
  }
  
  export default Gallery;
  
