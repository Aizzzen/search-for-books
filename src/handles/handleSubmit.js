import {changeIndex, changeStatus, handleCards, totalValue} from "../redux/slices/cardSlice";
import axios from "axios";
import {toast} from "react-toastify";

export const handleSubmit = ({dispatch, cards, query, startIndex, sortingBy, category}) => {
    dispatch(changeStatus(true))
    if(cards.length > 0) {
        dispatch(changeIndex(startIndex + 30))
    }
    axios
        .get(
            `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}&orderBy=${sortingBy.value}&subject=${category.value}&maxResults=30`
        )
        .then(response => {
            if (response.data.items.length === 0 || null) {
                toast.error('Nothing was found for your query')
            }
            dispatch(handleCards(response.data.items))
            if(cards.length === 0) {
                dispatch(totalValue(response.data.totalItems))
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
