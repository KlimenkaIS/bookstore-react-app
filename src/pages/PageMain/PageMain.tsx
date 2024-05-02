import './PageMain.css'
import { useEffect } from 'react';
import { fetchNewBooks } from '../../slices/bookstoreSlice';
import Card from '../../components/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import SubscribeBanner from '../../components/SubscribeBanner/SubscribeBanner';

function PageMain() {
    const dispatch = useDispatch<AppDispatch>()
    const booksNew = useSelector((state: any) => state.bookstore.newBooks)





    useEffect(() => {
        dispatch(fetchNewBooks())
    }, [])



    return (
        <>
            <div className="page-main">

                <span className='page-main__title'>NEW RELEASES BOOKS</span>

                <div className="page-main__cards">
                    {booksNew.books?.map((item: any) => (
                        <Card key={item.isbn13}
                            img={item.image}
                            title={item.title}
                            subtitle={item.subtitle}
                            price={item.price}
                            id={item.isbn13}
                        />
                    ))}
                </div>
                <SubscribeBanner/>
            </div>
        </>
    );
}

export default PageMain;