import React from 'react';
import resultsStyles from './results.module.css';

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
        <div className={resultsStyles.divResults}>
            <div className={resultsStyles.divSummaryResults}>
                <p className={resultsStyles.summaryResults}>
                    Summary:
                </p>
            </div>

            <p className={resultsStyles.paragraphResults}>
                Location: {location}
            </p>

            <p className={resultsStyles.paragraphResults}>
                Travelers: {totalPass} total ({adultCount} adults, {childrenCount} children) and {animalsCount} animals
            </p>

            <p className={resultsStyles.paragraphResults}>
                You're {travelingWork} traveling for work
            </p>

            <input
                className={resultsStyles.buttonBackResults} 
                type="button" 
                value="Back"
                onClick={onBackClick}
            />
        </div>
    )
}

