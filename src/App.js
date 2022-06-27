import React, { useState } from 'react';
import './App.css';
import {
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  Spinner
} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';
import BookCard from './BookCard.js';
import {categories, sortParams} from "./data";

function App() {
  // States
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

  // Handle Search
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

  // Load more
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

  // Main Show Case
  const mainHeader = () => {
    return (
      <div className='main-image d-flex justify-content-center align-items-center flex-column'>
        {/* Overlay */}
        <div className='filter'></div>
        <h1
          className='display-2 text-center text-white mb-3'
          style={{ zIndex: 2 }}
        >
          Search for books
        </h1>
        <div style={{ width: '60%', zIndex: 2, color: 'white' }}>
          <InputGroup size='lg' className='mb-3'>
            <Input
              placeholder='Enter the name of the book'
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <InputGroupAddon addonType='append'>
              <Button color='secondary' onClick={handleSubmit}>
                <i className='fas fa-search'></i>
              </Button>
            </InputGroupAddon>
          </InputGroup>
          <div className='select-field'>
              <span>
                Categories:
                  <select
                    onChange={e => setCategory({value: e.target.value})}
                  >
                      {categories.map(categor =>
                          <option
                            value={categor}
                          >
                            {categor}
                          </option>
                      )}
                  </select>
              </span>
            <span>
                Sorting by:
                <select
                    onChange={e => setSortingBy({value: e.target.value})}
                >
                  {sortParams.map(sorted =>
                      <option
                        value={sorted}
                      >
                        {sorted}
                      </option>
                  )}
                </select>
              </span>
          </div>
        </div>
      </div>
    );
  };

  const handleCards = () => {
    if (loading) {
      return (
        <div className='d-flex justify-content-center mt-3'>
          <Spinner style={{ width: '3rem', height: '3rem' }} />
        </div>
      );
    } else {
      const items = cards.map((item, i) => {
        let thumbnail = '';
        if (item.volumeInfo.imageLinks) {
          thumbnail = item.volumeInfo.imageLinks.thumbnail;
        } else {
            thumbnail = 'https://st3.depositphotos.com/1322515/35964/v/600/depositphotos_359648638-stock-illustration-image-available-icon.jpg'
        }
        console.log(cards)

        return (
          <div className='col-lg-4 mb-3' key={item.id}>
            <BookCard
                bookIndex={i+1}
                thumbnail={thumbnail}
                title={item.volumeInfo.title}
                categories={item.volumeInfo.categories}
                authors={item.volumeInfo.authors}
                description={item.volumeInfo.description}
                previewLink={item.volumeInfo.previewLink}
                infoLink={item.volumeInfo.infoLink}
            />
          </div>
        );
      });
      return (
        <div className='container my-5'>
          <div className='row'>{items}</div>
        </div>
      );
    }
  };
  return (
    <div className='w-100 h-100'>
      {mainHeader()}
        <div>
            <div className="d-flex justify-content-center align-items-center mt-3">
                <p>Found <strong> {totalBooks} </strong> results</p>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-3">
                <p>You have <strong> {cards.length} </strong> of them on your page</p>
            </div>
        </div>
      {handleCards()}
        <div className="d-flex justify-content-center align-items-center mb-3">
            {cards.length !== 0 && !loading
                ? <div onClick={clickedOn}>
                    <Button
                        onClick={handleSubmitMore}
                    >
                        Load more books
                    </Button>
                </div>
                : ''
            }
        </div>
      <ToastContainer />
    </div>
  );
}

export default App;
