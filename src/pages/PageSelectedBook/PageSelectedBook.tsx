import './PageSelectedBook.css'
import { Link, useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa"
import { FaRegStar } from "react-icons/fa"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { fetchSelectedBook, setTabStore, addToCartRedux, addToFavoritesRedux } from '../../slices/bookstoreSlice';
import { FaRegHeart } from "react-icons/fa";
import { SlSocialFacebook, SlSocialTwitter } from "react-icons/sl";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import ButtonBackHome from '../../components/ButtonBackHome/ButtonBackHome';
import SubscribeBanner from '../../components/SubscribeBanner/SubscribeBanner';


function PageSelectedBook() {
    const dispatch = useDispatch<AppDispatch>()
    const { id } = useParams()
    const selectedBook = useSelector((state: any) => state.bookstore.selectedBook)
    const currentTab = useSelector((state: any) => state.bookstore.tab)
    const cart = useSelector((state: any) => state.bookstore.cart)
    const favorites = useSelector((state: any) => state.bookstore.favorites)
    const hasInCart = cart.find((elem: any) => elem.isbn13 == selectedBook.isbn13)
    const hasInFavorites = favorites.find((elem: any) => elem.isbn13 === selectedBook.isbn13)


    const setTabOne = () => {
        dispatch(setTabStore(1))
    }
    const setTabTwo = () => {
        dispatch(setTabStore(2))
    }
    const setTabThree = () => {
        dispatch(setTabStore(3))
    }


    const addToCart = () => {
        if (!cart.find((elem: any) => elem.isbn13 == selectedBook.isbn13)) {
            dispatch(addToCartRedux(selectedBook))
        }

    }


    const addToFavorites = () => {
        if (!favorites.find((elem: any) => elem.isbn13 == selectedBook.isbn13)) {
            dispatch(addToFavoritesRedux(selectedBook))
        }

    }

    useEffect(() => {

        dispatch(fetchSelectedBook(id))
        setTabOne()

    }, [id])

    return (
        <>
            {selectedBook && (

                <div className="selected-book">
                    <ButtonBackHome />

                    <span className="selected-book__title">{selectedBook.title}</span>

                    <div className="selected-book-main-items">

                        <div className="selected-book-main-items-wrapper">
                            <img src={selectedBook.image} alt='book' className="selected-book-main-items__img" />
                            <div onClick={addToFavorites} className="selected-book-main-items-heart-wrapper">
                                <FaRegHeart className="selected-book-main-items__heart" style={hasInFavorites ? { display: "none" } : { display: 'block' }} />
                                <FaCheck className="selected-book-main-items__heart" style={hasInFavorites ? { display: "block" } : { display: 'none' }} />
                            </div>
                        </div>

                        <div className="selected-book-main-items-price-bar">
                            <div className="selected-book-main-items-price-bar-book-info">
                                <div className="selected-book-main-items-price-bar-book-info-items">
                                    <div className="selected-book-main-items-price-bar-book-info-item">
                                        <span className="selected-book-main-items-price-bar-book-info-item__price">{selectedBook.price}</span>
                                        <div className="selected-book-main-items-price-bar-book-info-price-and-rating-stars">
                                            <FaStar className='selected-book-main-items-price-bar-book-info-price-and-rating__star' />
                                            <FaStar className='selected-book-main-items-price-bar-book-info-price-and-rating__star' />
                                            <FaStar className='selected-book-main-items-price-bar-book-info-price-and-rating__star' />
                                            <FaStar className='selected-book-main-items-price-bar-book-info-price-and-rating__star' />
                                            <FaRegStar className='selected-book-main-items-price-bar-book-info-price-and-rating__star' />
                                        </div>
                                    </div>

                                    <div className="selected-book-main-items-price-bar-book-info-item">
                                        <span className="selected-book-main-items-price-bar-book-info-item__key">Authors</span>
                                        <span className="selected-book-main-items-price-bar-book-info-item__description">{selectedBook.authors}</span>
                                    </div>

                                    <div className="selected-book-main-items-price-bar-book-info-item">
                                        <span className="selected-book-main-items-price-bar-book-info-item__key">Publisher</span>
                                        <span className="selected-book-main-items-price-bar-book-info-item__description">{`${selectedBook.publisher}, ${selectedBook.year}`}</span>
                                    </div>

                                    <div className="selected-book-main-items-price-bar-book-info-item">
                                        <span className="selected-book-main-items-price-bar-book-info-item__key">Language</span>
                                        <span className="selected-book-main-items-price-bar-book-info-item__description">{selectedBook.language}</span>
                                    </div>

                                    <div className="selected-book-main-items-price-bar-book-info-item">
                                        <span className="selected-book-main-items-price-bar-book-info-item__key">Format</span>
                                        <span className="selected-book-main-items-price-bar-book-info-item__description">Paper book / ebook (PDF)</span>
                                    </div>
                                </div>

                                <div className='selected-book-main-items-price-bar-book-info-more-details'>More details {<MdOutlineKeyboardArrowDown />}</div>

                            </div>
                            <button onClick={addToCart} className="selected-book-main-items-price-bar__button-add-to-cart" style={hasInCart ? { backgroundColor: "grey" } : { backgroundColor: '#313037' }}>{hasInCart ? "Added to cart" : "Add to cart"}</button>
                            <Link to={selectedBook.url}>
                                <button className="selected-book-main-items-price-bar__button_preview">Preview Book</button>
                            </Link>
                        </div>
                    </div>

                    <div className="selected-book-tabs">
                        <div onClick={setTabOne} className={currentTab === 1 ? "selected-book-tabs__tab selected-book-tabs__tab_active" : "selected-book-tabs__tab"}>Description</div>
                        <div onClick={setTabTwo} className={currentTab === 2 ? "selected-book-tabs__tab selected-book-tabs__tab_active" : "selected-book-tabs__tab"}>Authors</div>
                        <div onClick={setTabThree} className={currentTab === 3 ? "selected-book-tabs__tab selected-book-tabs__tab_active" : "selected-book-tabs__tab"}>Reviews</div>
                    </div>

                    <div className={currentTab === 1 ? "selected-book-tabs-value selected-book-tabs-value_active" : "selected-book-tabs-value"}>{selectedBook.desc}</div>
                    <div className={currentTab === 2 ? "selected-book-tabs-value selected-book-tabs-value_active" : "selected-book-tabs-value"}>{selectedBook.authors}</div>
                    <div className={currentTab === 3 ? "selected-book-tabs-value selected-book-tabs-value_active" : "selected-book-tabs-value"}>No reviews. Maybe later :)</div>

                    <div className="selected-book-socials">
                        <SlSocialFacebook />
                        <SlSocialTwitter />
                        <HiOutlineDotsHorizontal />
                    </div>

                    <SubscribeBanner />
                </div>
            )}
        </>
    );
}

export default PageSelectedBook;