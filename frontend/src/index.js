import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AnimatedCursor from "react-animated-cursor"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <AnimatedCursor
      innerSize={12}
      outerSize={40}
      color='45, 164, 162'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    <App />
    </BrowserRouter>
  
);


