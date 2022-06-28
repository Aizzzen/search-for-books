import React from 'react';
import {Button} from "reactstrap";

const Footer = ({cards, loading, clickedOn, handleSubmitMore}) => {
    return (
        <div className="d-flex justify-content-center align-items-center mb-3">
            {cards.length !== 0 && !loading
                ? <div onClick={clickedOn}>
                    <Button
                        onClick={handleSubmitMore}
                    >
                        Load more books
                    </Button>
                </div>
                : ''
            }
        </div>
    );
};

export default Footer;
