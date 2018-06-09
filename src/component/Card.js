import React from "react";
import "./Card.css";
import notebook from "./notebook.jpg";

const Card = () => {
  return (
    <section className="section-card">
      <div class="row">
        <div className="card">
          <img src={notebook} alt="Discover" />
          <div className="description">
            <h3 className="title">Discover</h3>
            <p className="text">
              Discover all of your potentials and passions.
            </p>
            <a href="" className="card-btn">
              Learn More
            </a>
          </div>
        </div>
        <div className="card">
          <img src={notebook} alt="Discover" />
          <div className="description">
            <h3 className="title">Develop</h3>
            <p className="text">
              Develop your potentials by acquiring 21st Century skills
            </p>
            <a href="" className="card-btn">
              Learn More
            </a>
          </div>
        </div>
        <div className="card">
          <img src={notebook} alt="Discover" />
          <div className="description">
            <h3 className="title">Use</h3>
            <p className="text">
              Use your potentials to serve the world through Entrepreneurship
            </p>
            <a href="" className="card-btn">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
