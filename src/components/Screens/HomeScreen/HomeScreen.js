import React from "react";
import "./HomeScreen.modules.css";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";
import { Carousel } from "react-bootstrap";
export default function HomeScreen() {
  return (
    <Carousel>
      <Carousel.Item style={{ visibility: "visible" }}>
        <img
          className="d-block w-100"
          src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
