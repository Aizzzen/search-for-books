import React from 'react';
import {Button, Input, InputGroup, InputGroupAddon} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {queryValue} from "../../../redux/slices/inputSlice";
import {cleanCards, cleanTotal} from "../../../redux/slices/cardSlice";

const InputComponent = ({handleSubmit}) => {
    const query = useSelector(state => state.input.query)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const inputQuery = e.target.value
        if(query !== inputQuery) {
            dispatch(cleanTotal())
            dispatch(cleanCards())
            dispatch(queryValue(inputQuery))
        }
    }

    return (
        <InputGroup size='lg' className='mb-3'>
            <Input
                placeholder='Enter the name of the book'
                value={query}
                onChange={handleChange}
            />
            <InputGroupAddon addonType='append'>
                <Button color='secondary' onClick={handleSubmit}>
                    <i className='fas fa-search'></i>
                </Button>
            </InputGroupAddon>
        </InputGroup>
    );
};

export default InputComponent;
