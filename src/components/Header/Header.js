import React from 'react';
import {Button, Input, InputGroup, InputGroupAddon} from "reactstrap";
import {categories, sortParams} from "../../data";

const Header = ({query, setQuery, handleSubmit, setCategory, setSortingBy}) => {
        return (
            <div className='main-image d-flex justify-content-center align-items-center flex-column'>
                <div className='filter'></div>
                <h1
                    className='display-2 text-center text-white mb-3'
                    style={{ zIndex: 2 }}
                >
                    Search for books
                </h1>
                <div style={{ width: '60%', zIndex: 2, color: 'white' }}>
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
                    <div className='select-field'>
              <span>
                Categories:
                  <select
                      onChange={e => setCategory({value: e.target.value})}
                  >
                      {categories.map(categor =>
                          <option
                              value={categor}
                          >
                              {categor}
                          </option>
                      )}
                  </select>
              </span>
                        <span>
                Sorting by:
                <select
                    onChange={e => setSortingBy({value: e.target.value})}
                >
                  {sortParams.map(sorted =>
                      <option
                          value={sorted}
                      >
                          {sorted}
                      </option>
                  )}
                </select>
              </span>
                    </div>
                </div>
            </div>
        );
};

export default Header;
