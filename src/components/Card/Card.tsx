import './Card.css'
import { ICard } from '../../interfaces/interfaces';

function Card ({img, title, subtitle, price}: ICard) {
    return ( 
        <>
        <div className="card">
            <div className="card__img"><img src={img} alt="" /></div>
            <span className="card__title">{title}</span>
            <div className="card__subtitle">{subtitle}</div>
            <div className="card__price-bar">{price}</div>
        </div>
        </>
    );
}

export default Card 
