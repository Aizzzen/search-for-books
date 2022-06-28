import React from 'react';

const SortParametrs = ({title, setFunc, dataArr}) => {
    return (
        <span>
            {title}:
            <select
                onChange={e => setFunc({value: e.target.value})}
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
