import React from 'react';
import {Button} from "reactstrap";
import {useSelector} from "react-redux";

const Footer = ({clickedOn, handleSubmitMore}) => {
    const cards = useSelector(state => state.cards.cards)
    const loading = useSelector(state => state.cards.loading)

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
