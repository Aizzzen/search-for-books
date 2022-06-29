import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {cleanCards, cleanTotal} from "../../../redux/slices/cardSlice";

const SortParametrs = ({title, setFunc, dataArr, values}) => {
    const category = useSelector(state => state.input.category)
    const sortingBy = useSelector(state => state.input.sortingBy)
    const dispatch = useDispatch()

    let par;
    if(values === 'categories') {
        par = category
    } else {
        par = sortingBy
    }

    const handleChange = (e) => {
        const parametr = e.target.value
        if(par !== parametr) {
            dispatch(cleanTotal())
            dispatch(cleanCards())
            dispatch(setFunc({value: parametr}))
        }
    }

    return (
        <span>
            {title}:
            <select
                onChange={handleChange}
            >
                {dataArr.map(parametr =>
                        <option key={parametr}
                            value={parametr}
                        >
                            {parametr}
                        </option>
                )}
            </select>
        </span>
    );
};

export default SortParametrs;
