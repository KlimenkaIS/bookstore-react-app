import './PageSearch.css'
import '../../components/Pagination/Pagination.css'
import Card from '../../components/Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { useEffect } from 'react'
import { fetchAllBooks } from '../../slices/bookstoreSlice'
import ReactPaginate from 'react-paginate';



function PageSearch({ handlePageClick }: { handlePageClick: any }) {
    const booksSearch = useSelector((state: any) => state.bookstore.allBooks)
    const bookSearchValue = useSelector((state: any) => state.bookstore.bookSearch)
    const pageCountFromStore = useSelector((state: any) => state.bookstore.allBooks.total)
    const pageCount = Math.ceil(pageCountFromStore / 10)
    const dispatch = useDispatch<AppDispatch>()
    const currentPage = useSelector((state: any) => state.bookstore.currentPage)

    useEffect(() => {
        dispatch(fetchAllBooks({ searchStr: bookSearchValue, pageNmb: currentPage }))

    }, [dispatch, currentPage, bookSearchValue])



    return (
        <>




            {bookSearchValue ?
                <>

                    <div className="page-search">

                        <span className="page-search__title">{`'${bookSearchValue}' SEARCH RESULTS`}</span>

                        <span className="page-search__subtitle">{`Found ${pageCountFromStore} books`}</span>

                        <div className="page-search__cards">
                            {booksSearch.books?.map((item: any) => (
                                <Card key={item.isbn13}
                                    img={item.image}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    price={item.price}
                                    id={item.isbn13}
                                />
                            ))}
                        </div>

                    </div>

                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="Next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={1}
                        pageCount={pageCount}
                        previousLabel="< Prev"
                        renderOnZeroPageCount={null}
                        containerClassName='pagination'
                        pageClassName='pagination__page'
                        nextClassName='pagination__next'
                        previousClassName='pagination__prev'
                        activeClassName='pagination__page_active'
                        breakClassName='pagination__break'
                    ></ReactPaginate>
                </>
                : <span className="page-search__title">Enter your request</span>
            }
        </>
    );
}

export default PageSearch;