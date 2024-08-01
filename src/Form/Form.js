import { Counter } from "../Counter/Counter";
import formStyles from './form.module.css';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';

export const Form = ({ 
    adultCount, setAdultCount, 
    childrenCount, setChildrenCount, 
    animalsCount, setAnimalsCount, 
    inputValueLocation, setInputValueLocation, 
    inputCheckboxChildrenOrAnimals, setInputCheckboxChildrenOrAnimals, 
    inputCheckboxTermAndConditions, setInputCheckboxTermAndConditions, 
    inputRadioYesOrNoTravelingForWork, setInputRadioYesOrNoTravelingForWork,
    onBookNowClick 
  }) => {

    const handleInputValueLocation = (event) => {
        setInputValueLocation(event.target.value)
    }

    const handleInputCheckboxChildrenOrAnimals = (event) => {
        setInputCheckboxChildrenOrAnimals(event.target.checked)
    }

    const handleInputCheckboxTermAndConditions = (event) => {
        setInputCheckboxTermAndConditions(event.target.checked)
    }

    const onOptionChange = event => {
        setInputRadioYesOrNoTravelingForWork(event.target.value)
    }

    return (
        <div className={formStyles.divForms}>
            <div className={formStyles.divTotalPassengers}>
                <p className={formStyles.paragraphTotalPassengers}>
                    Total passengers: {adultCount + childrenCount}
                </p>
            </div>

            <Counter 
                onChange={setAdultCount} 
                value={adultCount} 
                maxValue={8} 
                tag="adult"
            />

            <div>
                <FormControlLabel 
                    control={<Checkbox 
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                        checked={inputCheckboxChildrenOrAnimals} 
                        onChange={handleInputCheckboxChildrenOrAnimals}
                    />} 
                    label="Are you travelling with children or animals?" 
                    sx={{
                        '& .MuiFormControlLabel-label': {
                            fontSize: '1.5rem',
                        },  
                    }}
                />

                { inputCheckboxChildrenOrAnimals && <> 
                    <Counter 
                        onChange={setChildrenCount} 
                        value={childrenCount} 
                        maxValue={4} 
                        tag="children"
                    />

                    <Counter 
                        onChange={setAnimalsCount} 
                        value={animalsCount}
                        maxValue={2} 
                        tag="animals"
                    />
                </>}
            </div>

            <div>
                <TextField 
                    value={inputValueLocation}
                    onChange={handleInputValueLocation} 
                    id="outlined-basic" 
                    label="Where are you going today?" 
                    variant="outlined"
                    sx={{
                        margin: 2,
                        width: '95%',
                        '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                                borderColor: '#59abe3',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#59abe3',
                            },
                            '&.Mui-focused.MuiInputBase-root': {
                                '& input': {
                                    borderColor: '#59abe3',
                                },
                            },
                        }
                    }}
                />

            </div>

            <div>

                <FormControl>
                    <FormLabel 
                        id="demo-row-radio-buttons-group-label"
                        sx={{
                            fontSize: '1.5rem',
                            color: '#333',
                        }}>
                        Are you traveling for work?
                    </FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        sx={{
                            justifyContent: 'center', 
                        }}>
                        <FormControlLabel 
                            value="yes" 
                            control={<Radio 
                                value="yes" 
                                checked={inputRadioYesOrNoTravelingForWork === "yes"} 
                                onChange={onOptionChange}
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                            />} 
                            label="Yes" />
                        <FormControlLabel 
                            value="no" 
                            control={<Radio 
                                value="no" 
                                checked={inputRadioYesOrNoTravelingForWork === "no"} 
                                onChange={onOptionChange}
                                sx={{'& .MuiSvgIcon-root': { fontSize: 20 } }}
                            />} 
                            label="No" />
                    </RadioGroup>
                </FormControl>

            </div>

            <div>

                <FormControlLabel 
                    control={<Checkbox 
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                        checked={inputCheckboxTermAndConditions} 
                        onChange={handleInputCheckboxTermAndConditions}
                    />} 
                    label="Do you accept terms and conditions?" 
                    sx={{
                        '& .MuiFormControlLabel-label': {
                            fontSize: '1.5rem',
                        },  
                    }}
                />

                <div>

                    <Button 
                        variant="contained"
                        disabled={!inputCheckboxTermAndConditions}
                        onClick={onBookNowClick}
                        sx={{
                            fontSize: '1.2rem',
                            marginTop: '1rem',
                            backgroundColor: '#59abe3',
                            '&:hover': {
                                backgroundColor: '#146ba5', 
                            },
                        }}
                    >
                        Book now
                    </Button>

                </div> 

            </div>
        </div>
    )
}