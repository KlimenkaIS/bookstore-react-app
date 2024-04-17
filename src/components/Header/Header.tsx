import './Header.css'
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { TbShoppingBag } from "react-icons/tb";
import { FiUser } from "react-icons/fi";

interface IInput {
    inputValue: string;
    setInputValue: React.ChangeEventHandler<HTMLInputElement>;
    handlerSubmit: React.KeyboardEventHandler<HTMLInputElement>;
}

function Header ({inputValue, setInputValue, handlerSubmit}: IInput) {
    return ( 
        <>
        <header className="header">
            <div className="header__title">BOOKSTORE</div>
            <form className="header-input">
                <input className='header-input__item' type='text' placeholder='Search'  value = {inputValue} onKeyDown={handlerSubmit} onChange={setInputValue}></input>
                <span className="header-input__icon"><IoIosSearch/></span>
            </form>
            <div className="header-icons">
                <div className="header-icons__item"><CiHeart /></div>
                <div className="header-icons__item"><TbShoppingBag/></div>
                <div className="header-icons__item"><FiUser/></div>
            </div>

        </header>
        </>
    );
}

export default Header ;