import React from 'react';

export const Results = ({
    location, 
    totalPass, 
    adultCount, 
    childrenCount, 
    animalsCount, 
    travelingWork, 
    onBackClick, 
}) => {

    return (
        <div>
            <div>
                <p>
                    Summary:
                </p>
            </div>

            <p>
                Location: {location}
            </p>

            <p>
                Travelers: {totalPass} total ({adultCount} adults, {childrenCount} children) and {animalsCount} animals
            </p>

            <p>
                You're {travelingWork} traveling for work
            </p>

            <input 
                type="button" 
                value="Back"
                onClick={onBackClick}
            />
        </div>
    )
}

