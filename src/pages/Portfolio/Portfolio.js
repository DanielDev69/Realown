import './Portfolio.css'
import React, { useState, useEffect } from 'react'
import Kunle from "../../assets/Kunle.jpg";

const Card = ({ imageURL, name, location, slotsAvailable, price, link }) => {
  return (
    <div className="card">
      <div className='card-direction'>
      <div className='card_img'>
      <img src={imageURL} alt={name} />
      </div>
      <div className='card-details'>
      <h2>{name}</h2>
      <p>{location}</p>
      <p>{slotsAvailable} slots available</p>
      <p>{price} per slot</p>
      <a className='linking' href={link}>------+</a>
      </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch data from API here
    // Update state with fetched data using setProperties
  }, []);

  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <hr />
      <div className="description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="cards">
        <Card
          imageURL={ Kunle }
          name="Property 1"
          location="New York, NY"
          slotsAvailable={3}
          price={50}
          link="https://example.com/property1"
        />
        <Card
          imageURL={ Kunle }
          name="Property 2"
          location="Los Angeles, CA"
          slotsAvailable={1}
          price={75}
          link="https://example.com/property2"
        />
        <Card
          imageURL={ Kunle }
          name="Property 3"
          location="Chicago, IL"
          slotsAvailable={5}
          price={40}
          link="https://example.com/property3"
        />
        <Card
          imageURL={ Kunle }
          name="Property 4"
          location="Houston, TX"
          slotsAvailable={2}
          price={65}
          link="https://example.com/property4"
        />
        <Card
          imageURL={ Kunle }
          name="Property 5"
          location="Philadelphia, PA"
          slotsAvailable={4}
          price={55}
          link="https://example.com/property5"
        />
        <Card
          imageURL={ Kunle }
          name="Property 6"
          location="Phoenix, AZ"
          slotsAvailable={3}
          price={45}
          link="https://example.com/property6"
        />
      </div>
    </div>
  );
};

export default Portfolio;