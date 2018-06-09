import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <div>
        <Header /> 
        <Section />
        <Card />
        <Footer />
        </div>
    );
}

export default App;