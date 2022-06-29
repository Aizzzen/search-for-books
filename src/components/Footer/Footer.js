import React from 'react';
import {Button} from "reactstrap";
import {useSelector} from "react-redux";

const Footer = ({handleSubmit}) => {
    const cards = useSelector(state => state.cards.cards)
    const loading = useSelector(state => state.cards.loading)

    const clickedOn = () => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    return (
        <div className="d-flex justify-content-center align-items-center mb-3">
            {cards.length !== 0 && !loading
                ? <div onClick={clickedOn}>
                    <Button
                        onClick={handleSubmit}
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
