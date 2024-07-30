import { Counter } from "./Counter";

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
        <div>
            <div>
                <p>
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
                <input 
                    type="checkbox" checked={inputCheckboxChildrenOrAnimals} 
                    onChange={handleInputCheckboxChildrenOrAnimals}
                />

                <label 
                    for="travelingChildrenOrAnimals">
                        Are you traveling with children or animals?
                </label>

                { inputCheckboxChildrenOrAnimals && <> 
                    <Counter onChange={setChildrenCount} value={childrenCount} maxValue={4} tag="children"/>
                    <Counter onChange={setAnimalsCount} value={animalsCount} maxValue={2} tag="animals"/>
                </>}
            </div>

            <div>
                <input 
                    type="text" 
                    value={inputValueLocation} 
                    onChange={handleInputValueLocation} 
                    placeholder="Where are you going today?"
                />
            </div>

            <div>
                <label 
                    for="travelingForWork">
                        Are you traveling for work?
                </label>

                <input 
                    type="radio" 
                    value="yes" 
                    checked={inputRadioYesOrNoTravelingForWork === "yes"} 
                    onChange={onOptionChange}
                />

                <label 
                    for="yes">
                        Yes
                </label>

                <input 
                    type="radio" 
                    value="no" 
                    checked={inputRadioYesOrNoTravelingForWork === "no"} 
                    onChange={onOptionChange}
                />

                <label 
                    for="no">
                        No
                </label>

            </div>

            <div>
                <input 
                    type="checkbox" 
                    name="termsAndConditions" 
                    checked={inputCheckboxTermAndConditions} 
                    onChange={handleInputCheckboxTermAndConditions}
                />

                <label 
                    for="termsAndConditions">
                        Do you accept terms and conditions?
                </label>

                <div>
                    <input 
                        type="button" 
                        value="Book now" 
                        disabled={!inputCheckboxTermAndConditions}
                        onClick={onBookNowClick}
                    />
                </div> 

            </div>
        </div>
    )
}