import React from 'react';
import TotalSchema from "./TotalSchema/TotalSchema";
import {useSelector} from "react-redux";

const TotalItems = () => {
    const cards = useSelector(state => state.cards.cards)
    const totalBooks = useSelector(state => state.cards.totalBooks)

    return (
        <div>
            <TotalSchema
                info={
                    <p>
                        Found <strong> {totalBooks} </strong> results
                    </p>
                }
            />
            <TotalSchema
                info={
                    <p>
                        You have <strong> {cards.length} </strong> of them on your page
                    </p>
                }
            />
        </div>
    )
}

export default TotalItems
