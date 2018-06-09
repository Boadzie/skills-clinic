import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './component/Header';
import Section from './component/Section';
import Footer from './component/Footer';
import Card from './component/Card';

ReactDOM.render(
    <div>
        <Header /> 
        <Section />
        <Card />
        <Footer />
    </div>,
    document.getElementById('root')
);

