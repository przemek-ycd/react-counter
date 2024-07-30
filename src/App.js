import { useState } from "react";
import "./App.css";
import { Counter } from "./Counter";

function App() {
  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [animalsCount, setAnimalsCount] = useState(0);
  const [inputValueLocation, setInputValueLocation] = useState();
  const [inputCheckboxChildrenOrAnimals, setInputCheckboxChildrenOrAnimals] = useState(false);
  const [inputCheckboxTermAndConditions, setInputCheckboxTermAndConditions] = useState(false);

  const handleInputValueLocation = (event) => {
    setInputValueLocation(event.target.value)
  }

  const handleInputCheckboxChildrenOrAnimals = (event) => {
    setInputCheckboxChildrenOrAnimals(event.target.checked)
  }

  const handleInputCheckboxTermAndConditions = (event) => {
    setInputCheckboxTermAndConditions(event.target.checked)
  }


  return (
    <div className="App">
      <header>
        <p>Total passengers: {adultCount + childrenCount}</p>
          <Counter onChange={setAdultCount} value={adultCount} maxValue={8} tag="adult"/>
          <input type="checkbox" checked={inputCheckboxChildrenOrAnimals} onChange={handleInputCheckboxChildrenOrAnimals}/> Are you traveling with children or animals?
          { inputCheckboxChildrenOrAnimals && <> 
            <Counter onChange={setChildrenCount} value={childrenCount} maxValue={4} tag="children"/>
            <Counter onChange={setAnimalsCount} value={animalsCount} maxValue={2} tag="animals"/>
          </>}

          <input type="text" value={inputValueLocation} onChange={handleInputValueLocation} placeholder="Where are you going today?"/>
          <input type="checkbox" name="termsAndConditions" checked={inputCheckboxTermAndConditions} onChange={handleInputCheckboxTermAndConditions}/>
          <label for="termsAndConditions">Do you accept terms and conditions?</label>
          <input type="button" value="Book now" disabled={!inputCheckboxTermAndConditions}/>
      </header>
    </div>
  );
}

export default App;
