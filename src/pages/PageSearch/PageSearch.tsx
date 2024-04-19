import './PageSearch.css'
import Card from '../../components/Card/Card';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

function PageSearch() {
    const booksSearch = useSelector((state: any) => state.bookstore.allBooks)
    const pageCountFromStore = useSelector((state: any) => state.bookstore.allBooks.total)

    const pageCount = Math.ceil(pageCountFromStore / 10)
    
    return (
        <>
            <div className="page-search">
                {booksSearch.books?.map((item: any) => (
                    <Card key={item.isbn13}
                        img={item.image}
                        title={item.title}
                        subtitle={item.subtitle}
                        price={item.price}
                    />
                ))}
            </div>
            {/* <ReactPaginate 
                pageCount={pageCount}

            ></ReactPaginate> */}
        </>
    );
}

export default PageSearch;