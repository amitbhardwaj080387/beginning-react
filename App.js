import React from 'react';
import ReactDOM from 'react-dom/client';
import myImage from './assets/images/Amit_Bhardwaj.jpg';
/**
<h1>This is our heading</h1>
*/
const heading = React.createElement("h1", {"id": "heading"}, "This is our heading");

// JSX transpiled before it reaches JS engine -Parcel->Babel
const jsxHeading = <h1 id="heading" className='head' tabIndex="1000">This is our heading using JSX</h1>
// image tag using jsx
const imageElement = <img src={myImage} alt="User picture" width="300" height="500"/>
console.log(imageElement)

// anchor tag
const anchorTag = <a href='#' target='_blank'>Click it</a>
console.log(heading);// React.Element return an object
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(anchorTag)// when we render the object is converted into HTML
