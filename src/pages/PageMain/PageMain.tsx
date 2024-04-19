import './PageMain.css'
import {  useEffect } from 'react';
import { fetchNewBooks } from '../../slices/bookstoreSlice';
import Card from '../../components/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';

function PageMain() {
    const dispatch = useDispatch<AppDispatch>()
    const booksNew = useSelector((state: any) => state.bookstore.newBooks)



    useEffect(() => {
        dispatch(fetchNewBooks())
    }, [])



    return (
        <>
            <div className="page-main">
                {booksNew.books?.map((item: any) => (
                    <Card key={item.isbn13} 
                        img={item.image}
                        title={item.title}
                        subtitle={item.subtitle}
                        price={item.price}
                    />
                ))}
            </div>
        </>
    );
}

export default PageMain;