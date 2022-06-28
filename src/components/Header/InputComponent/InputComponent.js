import React from 'react';
import {Button, Input, InputGroup, InputGroupAddon} from "reactstrap";

const InputComponent = ({query, setQuery, handleSubmit}) => {
    return (
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
    );
};

export default InputComponent;
