import React from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {changeIndex, changeStatus, handleCards, totalValue} from "./redux/slices/cardSlice";

function App() {
    const cards = useSelector(state => state.cards.cards)
    const startIndex = useSelector(state => state.cards.startIndex)

    const category = useSelector(state => state.input.category)
    const sortingBy = useSelector(state => state.input.sortingBy)
    const query = useSelector(state => state.input.query)

    const dispatch = useDispatch()

    const clickedOn = () => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    const handleSubmit = () => {
        dispatch(changeStatus(true))
        axios
            .get(
              `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}&orderBy=${sortingBy.value}&subject=${category.value}&maxResults=30`
            )
            .then(response => {
                if (response.data.items.length === 0 || null) {
                  toast.error('Nothing was found for your query')
                }
                dispatch(handleCards(response.data.items))
                dispatch(totalValue(response.data.totalItems))
                dispatch(changeStatus(false))
            })
            .catch(error => {
                dispatch(changeStatus(true))
              toast.error(error.message);
            });
    }

    const handleSubmitMore = () => {
        dispatch(changeStatus(true))
        dispatch(changeIndex(startIndex + 30))
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}&orderBy=${sortingBy.value}&subject=${category.value}&maxResults=30`
            )
            .then(response => {
                dispatch(handleCards([...cards, ...response.data.items]))
                dispatch(changeStatus(false))
            })
            .catch(error => {
                dispatch(changeStatus(true))
                toast.error(error.message);
            });
    }

    return (
        <div className='w-100 h-100'>
          <Header handleSubmit={handleSubmit} />
          <Cards/>
          <Footer clickedOn={clickedOn} handleSubmitMore={handleSubmitMore} />
          <ToastContainer />
        </div>
      );
    }

export default App;
