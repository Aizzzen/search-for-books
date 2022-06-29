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

    const handleSubmit = () => {
        dispatch(changeStatus(true))
        if(cards.length > 0) {
            dispatch(changeIndex(startIndex + 30))
        }
        axios
            .get(
              `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}&orderBy=${sortingBy.value}&subject=${category.value}&maxResults=30&key=AIzaSyCdAVMsVpnSaPF8_cOgCpbWcGuapVpbfaY`
            )
            .then(response => {
                if (response.data.items.length === 0 || null) {
                  toast.error('Nothing was found for your query')
                }
                dispatch(totalValue(response.data.totalItems))
                if(cards.length === 0) {
                    dispatch(handleCards(response.data.items))
                } else {
                    dispatch(handleCards([...cards, ...response.data.items]))
                }
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
          <Footer handleSubmit={handleSubmit} />
          <ToastContainer />
        </div>
      );
    }

export default App;
