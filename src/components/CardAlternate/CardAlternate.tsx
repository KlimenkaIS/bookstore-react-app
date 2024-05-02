import './CardAlternate.css'
import { Link } from 'react-router-dom';
import { ICard } from '../../interfaces/interfaces';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './../../store/store';
import { removeFromCartRedux, removeFromFavoriteRedux } from '../../slices/bookstoreSlice';
import { IoMdHeart } from "react-icons/io";
import { FaStar } from "react-icons/fa"
import { FaRegStar } from "react-icons/fa"

function CardAlternate({ img, title, authors, price, id, publisher, year, isFavoriteCard }: ICard) {
    const dispatch = useDispatch<AppDispatch>()
    const colors = ['#D7E4FD', '#F4EEFD', '#FEE9E2', '#CAEFF0']
    const getRandomColor = (()=> {
        return colors[Math.floor(Math.random() * colors.length)]
    })
    return (
        <>
            <div className="card-alternate">
                <Link to={`/book/${id}`}>
                    <div className="card-alternate__img" style={{backgroundColor: getRandomColor()}}><img src={img} alt="book" /></div>
                </Link>
                <div className="card-alternate-title-and-subtitle">
                    <Link to={`/book/${id}`}>
                        <span className="card-alternate__title">{title}</span>
                    </Link>
                    <Link to={`/book/${id}`}>
                        <div className="card-alternate__subtitle">{`by ${authors}, ${publisher} ${year}`}</div>
                    </Link>
                    <div className="card-alternate-price-bar" style={isFavoriteCard ? { display: "flex" } : { display: "none" }}>
                        <div className="card-alternate-price-bar__price">{price}</div>
                        <div className="card-alternate-price-bar__stars">
                            <FaStar className='card-alternate-price-bar__star' />
                            <FaStar className='card-alternate-price-bar__star' />
                            <FaStar className='card-alternate-price-bar__star' />
                            <FaStar className='card-alternate-price-bar__star' />
                            <FaRegStar className='card-alternate-price-bar__star' />
                        </div>
                    </div>
                </div>
                <span className="card-alternate__price" style={isFavoriteCard ? { visibility: "hidden" } : { visibility: "visible" }}>{price}</span>
                <button onClick={() => dispatch(removeFromCartRedux({ id }))} className='card-alternate__cross' style={isFavoriteCard ? { display: "none" } : { display: "block" }}>X</button>
                <button onClick={() => dispatch(removeFromFavoriteRedux({ id }))} className='card-alternate__cross' style={isFavoriteCard ? { display: "block" } : { display: "none" }}><IoMdHeart className='card-alternate__heart' /></button>
            </div>
        </>
    );
}

export default CardAlternate;