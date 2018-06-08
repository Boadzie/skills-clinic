import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <Header /> 
        <Section />
        <Footer />
    </div>,
    document.getElementById('root')
);
registerServiceWorker();
