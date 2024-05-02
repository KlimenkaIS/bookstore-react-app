import './Header.css'
import { IoIosSearch } from "react-icons/io";
import { TbShoppingBag, TbShoppingBagExclamation, TbHeartExclamation, TbHeart } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { IInput } from '../../interfaces/interfaces';
import { useSelector } from 'react-redux';



function Header({ inputValue, setInputValue, handlerSubmit }: IInput) {
    const favorites = useSelector((state: any) => state.bookstore.favorites)
    const cart = useSelector((state: any) => state.bookstore.cart)


    return (
        <>
            <header className="header">
                <Link to='/'>
                    <div className="header__title">BOOKSTORE</div>
                </Link>
                <form className="header-input">
                    <input className='header-input__item' type='text' placeholder='Search' value={inputValue} onKeyDown={handlerSubmit} onChange={setInputValue}></input>
                    {inputValue.length < 50 ? <IoIosSearch className="header-input__icon" /> : null}
                </form>
                <div className="header-icons">
                    <Link to='/favorites'>
                        <div className="header-icons__item" style={favorites.length === 0 ? {display: "flex"}:{display: 'none'}}><TbHeart /></div>
                        <div className="header-icons__item" style={favorites.length > 0? {display: "flex"}:{display: 'none'}}><TbHeartExclamation /></div>
                    </Link>
                    <Link to='/cart'>
                        <div className="header-icons__item" style={cart.length === 0 ? {display: "flex"}:{display: 'none'}}><TbShoppingBag /></div>
                        <div className="header-icons__item" style={cart.length > 0 ? {display: "flex"}:{display: 'none'}}><TbShoppingBagExclamation /></div>
                    </Link>
                    <div className="header-icons__item"><FiUser /></div>
                </div>

            </header>
        </>
    );
}

export default Header;