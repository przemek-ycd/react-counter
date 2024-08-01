import React from 'react';
import resultsStyles from './results.module.css';
import Button from '@mui/material/Button';

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

            <Button 
                variant="contained"
                onClick={onBackClick}
                sx={{
                    fontSize: '1.2rem',
                    marginTop: '1rem',
                    backgroundColor: '#59abe3',
                    '&:hover': {
                        backgroundColor: '#146ba5', 
                    },
                }}
            >
                Back
            </Button>

        </div>
    )
}

