import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './store/store';
import { setBookSearch, fetchAllBooks } from './slices/bookstoreSlice';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PageMain from './pages/PageMain/PageMain';
import PageSearch from './pages/PageSearch/PageSearch';


function App() {
const [inputValueSearch, setInputValueSearch] = useState('')

const dispatch = useDispatch<AppDispatch>()
const booksSearch = useSelector((state: any) => state.bookstore.bookSearch)
const currentPage = useSelector((state: any) => state.bookstore.currentPage)


  function handleKeyDown(event: any) {
    if (event.key === 'Enter') {
      event.preventDefault();
      dispatch(setBookSearch(inputValueSearch))
      dispatch(fetchAllBooks({searchStr: inputValueSearch, pageNmb: currentPage}))
      console.log(currentPage)
    }
  }


  return (
    <>
      <Header
        handlerSubmit={handleKeyDown}
        inputValue={inputValueSearch}
        setInputValue={e => setInputValueSearch(e.target.value)}
      ></Header>
      
      {booksSearch ? <PageSearch></PageSearch> : <PageMain/> }
      

      <Footer></Footer>
    </>
  );
}
export default App;
