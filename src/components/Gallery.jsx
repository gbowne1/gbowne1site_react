/* eslint-disable react/prop-types */
import "../assets/styles/Gallery.css";
import image1 from "../assets/images/seattle.jpg";
import image2 from "../assets/images/me.jpg";
import image3 from "../assets/images/coding_channels_resize_md.jpg";
import { Card, Modal, Button } from "react-bootstrap";
import { useState } from "react";

function ImageCard({ img, alt, text, onClick }) {
  return (
    <Card style={{ width: "23rem" }} onClick={onClick}>
      <Card.Img
        variant="top"
        src={img}
        alt={alt}
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Text style={{ color: "black" }}>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function Gallery() {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState({
    img: "",
    text: "",
  });
  const handleClose = () => {
    setShow(false);
    setImage({ img: "", text: "" });
  };
  const handleShow = (img, text) => {
    setShow(true);
    setImage({ img: img, text: text });
  };

  const images = [
    {
      img: image1,
      alt: "View of Seattle skyline from Kerry Park",
      text: "View of Seattle skyline from Kerry Park",
    },
    {
      img: image2,
      alt: "Selfie of Gregory Bowne",
      text: "Selfie taken during a hike in the Cascades",
    },
    {
      img: image3,
      alt: "code editor showing HTML code",
      text: "Coding on the couch with the best programming channels",
    },
  ];

  return (
    <div className="main-gallery">
      {/* <NavBar/> */}
      <h2 style={{ marginTop: "50px" }}>Gallery</h2>
      <div className="gallery">
        {images.map((card, index) => (
          <ImageCard
            key={index}
            {...card}
            onClick={() => handleShow(card.img, card.text)}
          />
        ))}
      </div>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <img src={image.img} />
        <Modal.Title>{image.text}</Modal.Title>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Gallery;
