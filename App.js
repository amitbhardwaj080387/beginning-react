import React from 'react';
import ReactDOM from 'react-dom/client';

const elem = <span>This is span.</span>
const title =  <h1 id="heading" className='head' tabIndex="1000">{elem} This is our heading using JSX</h1>

const HeadingComponent = () =>(
    <div id="container">
        {title}
        <h1 className="heading">This is heading using React functional component</h1>
    </div>
    );


// const HeadingComponent2 = function() {
//     return (<h1 className="heading">This is heading using React functional component</h1>)
// };
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeadingComponent/>)// when we render the object is converted into HTML