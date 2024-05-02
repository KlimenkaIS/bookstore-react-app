import './ButtonBackHome.css';
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { Link } from 'react-router-dom';


function ButtonBackHome() {
    return (
        <>
            <Link to='/'>
                <HiOutlineArrowLongLeft className='button-back-home' />
            </Link>
        </>
    );
}

export default ButtonBackHome;