import React from 'react';
import {categories, sortParams} from "../../data";
import SortParametrs from "./SortParametrs/SortParametrs";
import InputComponent from "./InputComponent/InputComponent";

const Header = ({query, setQuery, handleSubmit, setCategory, setSortingBy}) => {
        return (
            <div className='main-image d-flex justify-content-center align-items-center flex-column'>
                <div className='filter'></div>
                <h1
                    className='header-z-z display-2 text-center text-white mb-3'
                >
                    Search for books
                </h1>
                <div className='input-container'>
                    <InputComponent query={query} setQuery={setQuery} handleSubmit={handleSubmit} />
                    <div className='select-field'>
                        <SortParametrs title={'Categories'} setFunc={setCategory} dataArr={categories} />
                        <SortParametrs title={'Sorting by'} setFunc={setSortingBy} dataArr={sortParams} />
                    </div>
                </div>
            </div>
        );
};

export default Header;
