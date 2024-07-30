import { useState } from "react";
import "./App.css";
import { Form } from "./Form/Form";
import { Results } from "./Results/Results";

function App() {
  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [animalsCount, setAnimalsCount] = useState(0);
  const [inputValueLocation, setInputValueLocation] = useState();
  const [inputCheckboxChildrenOrAnimals, setInputCheckboxChildrenOrAnimals] = useState(false);
  const [inputCheckboxTermAndConditions, setInputCheckboxTermAndConditions] = useState(false);
  const [inputRadioYesOrNoTravelingForWork, setInputRadioYesOrNoTravelingForWork] = useState(false);
  const [changeViewFormOrResults, setChangeViewFormOrResults] = useState(false);

  const handleBookNowClick  = () => {
    setChangeViewFormOrResults(true);
  };

  const handleBackClick  = () => {
    setInputCheckboxTermAndConditions(false);
    setChangeViewFormOrResults(false);
  };

  return (
    <div className="App">
      <header>

          <div>
            { changeViewFormOrResults ? (
              <Results 
                location={inputValueLocation} 
                totalPass={adultCount + childrenCount} 
                adultCount={adultCount} 
                childrenCount={childrenCount} 
                animalsCount={animalsCount} 
                travelingWork={inputRadioYesOrNoTravelingForWork === "yes" ? "" : "not"}
                onBackClick={handleBackClick}
              />
            ) : (
              <Form
                adultCount={adultCount} setAdultCount={setAdultCount} 
                childrenCount={childrenCount} setChildrenCount={setChildrenCount} 
                animalsCount={animalsCount} setAnimalsCount={setAnimalsCount} 
                inputValueLocation={inputValueLocation} setInputValueLocation={setInputValueLocation} 
                inputCheckboxChildrenOrAnimals={inputCheckboxChildrenOrAnimals} setInputCheckboxChildrenOrAnimals={setInputCheckboxChildrenOrAnimals} 
                inputCheckboxTermAndConditions={inputCheckboxTermAndConditions} setInputCheckboxTermAndConditions={setInputCheckboxTermAndConditions} 
                inputRadioYesOrNoTravelingForWork={inputRadioYesOrNoTravelingForWork} setInputRadioYesOrNoTravelingForWork={setInputRadioYesOrNoTravelingForWork}
                onBookNowClick={handleBookNowClick}
              />
            )
            }
          </div>
      </header>
    </div>
  );
}

export default App;
