import { useSelector } from 'react-redux';
import './PageFavorites.css'
import ButtonBackHome from '../../components/ButtonBackHome/ButtonBackHome';
import CardAlternate from '../../components/CardAlternate/CardAlternate';
import SubscribeBanner from '../../components/SubscribeBanner/SubscribeBanner';

function PageFavorites() {
    const favorites = useSelector((state: any) => state.bookstore.favorites)

    return (
        <>
            {favorites.length === 0 && (
                <>
                    <ButtonBackHome />
                    <span className='favorites__title'>Your don't have favorite books</span>
                </>
            )}

            {favorites.length > 0 && (
                <div className="favorites">
                    <ButtonBackHome />

                    <span className='favorites__title'>Favorites</span>
                    <div className="favorites-cards-container">
                        {favorites.map((elem: any) => (

                            <CardAlternate key={elem.isbn13}
                                img={elem.image}
                                title={elem.title}
                                authors={elem.authors}
                                publisher={elem.publisher}
                                year={elem.year}
                                price={elem.price}
                                id={elem.isbn13}
                                isFavoriteCard={true}
                            ></CardAlternate>
                        ))}
                    </div>

                    <SubscribeBanner/>
                </div>
            )}
        </>
    );
}

export default PageFavorites;