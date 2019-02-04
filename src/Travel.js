import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
  <figure>
    
    <figcaption>
      <blockquote>{destination}</blockquote>
      <cite>{country} </cite>
      <cite>{distance}</cite>
    </figcaption>
    <img src={photo} alt={country} />
  </figure>
);

export default Travel;
