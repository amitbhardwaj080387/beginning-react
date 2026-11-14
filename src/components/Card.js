import {CDN_URL} from '../utils/constants';

const Card = (props) => {
    
    const {resData} = props;
    const {name, avgRating, deliveryTime, location} = resData;
    return (
        <div className='card-elem'>
            <div className='img'>
                <img src={CDN_URL} alt='dish image'/>
            </div>
            <div className='dish-name'>
                <h3 className='dis-name'>{name}</h3>
                <h4 className='rating'>{`${avgRating} ${deliveryTime}`} </h4>
                <h4 className='location'>{location}</h4>
            </div>
        </div>
    )
}

export default Card;