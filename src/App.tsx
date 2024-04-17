import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './store/store';
import { setBookSearch, fetchAllBooks } from './slices/bookstoreSlice';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PageMain from './pages/PageMain';


function App() {
const [inputValueSearch, setInputValueSearch] = useState('')
const dispatch = useDispatch<AppDispatch>()
const searchData = useSelector((state: any) => state.bookstore.bookSearch)

  function handleKeyDown(event: any) {
    if (event.key === 'Enter') {
      event.preventDefault();
      dispatch(setBookSearch(inputValueSearch))
      dispatch(fetchAllBooks(inputValueSearch))
      setInputValueSearch("")

    }
  }


  return (
    <>
      <Header
        handlerSubmit={handleKeyDown}
        inputValue={inputValueSearch}
        setInputValue={e => setInputValueSearch(e.target.value)}
      ></Header>

      <PageMain></PageMain>

      <Footer></Footer>
    </>
  );
}
export default App;
