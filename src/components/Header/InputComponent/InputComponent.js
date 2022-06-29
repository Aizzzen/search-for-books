import React from 'react';
import {Button, Input, InputGroup, InputGroupAddon} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {queryValue} from "../../../redux/slices/inputSlice";

const InputComponent = ({handleSubmit}) => {
    const query = useSelector(state => state.input.query)
    const dispatch = useDispatch()

    return (
        <InputGroup size='lg' className='mb-3'>
            <Input
                placeholder='Enter the name of the book'
                value={query}
                onChange={e => dispatch(queryValue(e.target.value))}
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
