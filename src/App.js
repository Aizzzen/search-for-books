import React, { useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";

function App() {
  const [category, setCategory] = useState({value: 'all'});
  const [sortingBy, setSortingBy] = useState({value: 'relevance'});
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [startIndex, setStartIndex] = useState(1);
  const [totalBooks, setTotalBooks] = useState(0);

  const clickedOn = () => {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  const handleSubmit = () => {
    setLoading(true);
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}&orderBy=${sortingBy.value}&subject=${category.value}&maxResults=30`
        )
        .then(response => {
            if (response.data.items.length === 0 || null) {
              toast.error('Nothing was found for your query')
            }
            setCards(response.data.items);
            setTotalBooks(response.data.totalItems);
            setLoading(false);
        })
        .catch(error => {
          setLoading(true);
          toast.error(error.message);
        });
  }

    const handleSubmitMore = () => {
        setLoading(true);
        setStartIndex(startIndex + 30)
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}&orderBy=${sortingBy.value}&subject=${category.value}&maxResults=30`
            )
            .then(response => {
                setCards([...cards, ...response.data.items]);

                setLoading(false);
            })
            .catch(error => {
                setLoading(true);
                toast.error(error.message);
            });
    }

  return (
    <div className='w-100 h-100'>
      <Header query={query} setQuery={setQuery} handleSubmit={handleSubmit} setCategory={setCategory} setSortingBy={setSortingBy} />
      <Cards loading={loading} cards={cards} totalBooks={totalBooks} />
      <Footer cards={cards} loading={loading} clickedOn={clickedOn} handleSubmitMore={handleSubmitMore} />
      <ToastContainer />
    </div>
  );
}

export default App;
