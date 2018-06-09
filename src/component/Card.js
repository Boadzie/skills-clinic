import React from 'react';
import './Card.css';
import notebook from './notebook.jpg';

const Card = () => {
    return(
        <section className="section-card">
            <div class="row">
                <div className="card">
                    <img src={notebook} alt="Discover" />
                    <div className="description">
                        <h3 className="title">Title</h3>
                        <p className="text">
                            reate React App is the best way to start building a new React single page application.
                        </p>
                        <a href="" className="card-btn">Learn More</a>
                    </div>
                    
                </div>
                <div className="card">
                    <img src={notebook} alt="Discover" />
                    <div className="description">
                        <h3 className="title">Title</h3>
                        <p className="text">
                            reate React App is the best way to start building a new React single page application.
                        </p>
                        <a href="" className="card-btn">Learn More</a>
                    </div>
                    
                </div>
                <div className="card">
                    <img src={notebook} alt="Discover" />
                    <div className="description">
                        <h3 className="title">Title</h3>
                        <p className="text">
                            reate React App is the best way to start building a new React single page application.
                        </p>
                        <a href="" className="card-btn">Learn More</a>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default Card;