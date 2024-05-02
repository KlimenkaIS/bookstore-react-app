import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './store/store';
import { setBookSearch, fetchAllBooks, setPage } from './slices/bookstoreSlice';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PageMain from './pages/PageMain/PageMain';
import PageSearch from './pages/PageSearch/PageSearch';
import PageSelectedBook from './pages/PageSelectedBook/PageSelectedBook';
import PageCart from './pages/PageCart/PageCart';
import PageFavorites from './pages/PageFavorites/PageFavorites';




function App() {
  const [inputValueSearch, setInputValueSearch] = useState('')
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const currentPage = useSelector((state: any) => state.bookstore.currentPage)

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected + 1)
    dispatch(setPage(newOffset));
  };

  function handleKeyDown(event: any) {
    if (event.key === 'Enter') {
      event.preventDefault()
      dispatch(setPage("1"))
      dispatch(setBookSearch(inputValueSearch))
      dispatch(fetchAllBooks({ searchStr: inputValueSearch, pageNmb: currentPage }))
      navigate(`/search`)
    }
  }

  return (
    <>
      <Header
        handlerSubmit={handleKeyDown}
        inputValue={inputValueSearch}
        setInputValue={e => setInputValueSearch(e.target.value)}
      ></Header>

      <Routes>
        <Route path='/' element={<PageMain></PageMain>} />
        <Route path='/search' element={<PageSearch handlePageClick={handlePageClick} />} />
        <Route path='/book/:id' element={<PageSelectedBook />} />
        <Route path='/cart' element={<PageCart />} />
        <Route path='/favorites' element={<PageFavorites />} />
      </Routes>

      <Footer></Footer>
    </>
  );
}
export default App;
