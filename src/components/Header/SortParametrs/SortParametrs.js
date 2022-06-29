import React from 'react';
import {useDispatch} from "react-redux";

const SortParametrs = ({title, setFunc, dataArr}) => {
    const dispatch = useDispatch()

    return (
        <span>
            {title}:
            <select
                onChange={e => dispatch(setFunc({value: e.target.value}))}
            >
                {dataArr.map(parametr =>
                        <option
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
