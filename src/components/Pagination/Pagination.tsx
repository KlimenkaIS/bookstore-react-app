import { useSelector } from 'react-redux';
import './Pagination.css'
import ReactPaginate from 'react-paginate';

export default function Pagination() {
    const searchItems = useSelector((state: any) => state.bookstore.books)
    return (
        <>
            <ul className='pagination'>

            </ul>

        </>

    );
}