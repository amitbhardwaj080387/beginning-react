import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './assets/images/logo.jpg';

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurent cards container
 *    - RestaurentCard
 *     - img
 *     - Name of restaurent, star rating, cuisine - (North Indian, South Indian), delivery   *       time
 * Footer
 *  - copyright
 *  - Links
 *  - Address
 *  - Contact
 */
const Header = () => {
    return (
        <div className="head">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Card = (props) => {
    
    const {resData} = props;
    const {name, avgRating, deliveryTime, location} = resData;
    return (
        <div className='card-elem'>
            <div className='img'>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/d3eff161-fb4a-4626-bf07-3f0e5ab083a0_156113.jpg" alt='dish image'/>
            </div>
            <div className='dish-name'>
                <h3 className='dis-name'>{name}</h3>
                <h4 className='rating'>{`${avgRating} ${deliveryTime}`} </h4>
                <h4 className='location'>{location}</h4>
            </div>
        </div>
    )
}

const resList = [
    {
        name: "Punjabi Angithi",
        avgRating: 4.4,
        deliveryTime: "30-40 mins",
        location: "Ashok Vihar"
    },
    {
        name: "Jai veer chaap",
        avgRating: 4.5,
        deliveryTime: "50-85 mins",
        location: "M2K Rohini"
    }
];
const Body = () => {
    return (
        <div className='body'>
            <div className='search-bar'>
                <form>
                    <input type="input" name='search-inp' placeholder='search food here'/>
                    <input type='submit' value='search' name='search'/>
                </form>
            </div>
            <div className='card-container'>
                {
                    resList.map((restaurent,index) => (
                     <Card resData={restaurent} key={index} />
                    ))
                }
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div id="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)// when we render the object is converted into HTML