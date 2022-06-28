import React from 'react';
import TotalSchema from "./TotalSchema/TotalSchema";

const TotalItems = ({totalBooks, cards}) => {
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
