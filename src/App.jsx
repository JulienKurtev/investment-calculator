import { useState } from "react";
import Header from "./components/Header";
import UserInputContainer from "./components/UserInputContainer";
import Results from "./components/Results";

function App() {
  const [investments, setInvestments] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChngeInput(inputId, newValue) {
    setInvestments((prevInvestments) => {
      return { ...prevInvestments, [inputId]: +newValue };
    });
  }

  const inputIsValid = investments.duration >= 1;

  return (
    <>
      <Header />
      <UserInputContainer
        investments={investments}
        handleChnge={handleChngeInput}
      />
      {inputIsValid && <Results investments={investments} />}
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than 0</p>
      )}
    </>
  );
}

export default App;
