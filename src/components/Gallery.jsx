import "../assets/styles/Gallery.css";
import image1 from "../assets/images/seattle.jpg";
import image2 from "../assets/images/me.jpg";
import image3 from "../assets/images/coding_channels_resize_md.jpg";
import { Card, Modal, Button } from 'react-bootstrap';
import { useState } from "react";


function Gallery() {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState({
    img: "",
    text: ""
  });
  const handleClose = () => {
    setShow(false);
  }
  const handleShow = (img, text) => {
    setShow(true);
    setImage({ img: img, text: text });
  };

  const cardObj1 = {
    img: image1,
    text: "View of Seattle skyline from Kerry Park"
  }
  const cardObj2 = {
    img: image2,
    text: "Selfie taken during a hike in the Cascades"
  }
  const cardObj3 = {
    img: image3,
    text: "Coding on the couch with the best programming channels"
  }
  const images = [cardObj1, cardObj2, cardObj3];

  return (
    <div className="main-gallery">
      {/* <NavBar/> */}
      <h2 style={{ marginTop: "50px" }}>Gallery</h2>
      <div className="gallery">
        {
          images.map((ele) => (
            <div>
              <Card style={{ width: '23rem' }} onClick={() => handleShow(ele.img, ele.text)}>
                <Card.Img variant="top" src={ele.img} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Text style={{ color: "black" }}>
                    {ele.text}
                  </Card.Text>
                </Card.Body>
              </Card>
              {
                <Modal show={show} onHide={handleClose} centered size="lg">
                  <img src={image.img} />
                  <Modal.Title>{image.text}</Modal.Title>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Gallery;