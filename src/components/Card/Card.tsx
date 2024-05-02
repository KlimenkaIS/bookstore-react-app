import './Card.css'
import { ICard } from '../../interfaces/interfaces'
import { FaStar } from "react-icons/fa"
import { FaRegStar } from "react-icons/fa"
import { Link } from 'react-router-dom'

function Card({ img, title, subtitle, price, id }: ICard) {
    
    const colors = ['#D7E4FD', '#F4EEFD', '#FEE9E2', '#CAEFF0']
    const getRandomColor = (()=> {
        return colors[Math.floor(Math.random() * colors.length)]
    })


    return (
        <>
            <div className="card">
                <Link to={`/book/${id}`}>
                    <div className="card__img" style={{backgroundColor: getRandomColor()}}><img src={img} alt="book" /></div>
                </Link>
                <Link to={`/book/${id}`}>
                    <span className="card__title">{title}</span>
                </Link>
                <Link to={`/book/${id}`}>
                    <div className="card__subtitle">{subtitle}</div>
                </Link>

                <div className="card__price-bar">{price}</div>
                <div className="card__stars">
                    <FaStar className='card__star' />
                    <FaStar className='card__star' />
                    <FaStar className='card__star' />
                    <FaStar className='card__star' />
                    <FaRegStar className='card__star' />
                </div>

            </div>
        </>
    );
}

export default Card 
