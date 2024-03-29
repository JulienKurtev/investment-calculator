import UserInput from "./UserInput";

export default function UserInputContainer({ investments, handleChnge }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <UserInput
            type="number"
            id="initial-investment"
            label="Initial Invesdtment"
            required
            min="0"
            value={investments.initialInvestment}
            onChange={(event) =>
              handleChnge("initialInvestment", event.target.value)
            }
          />
        </p>

        <p>
          <UserInput
            type="number"
            id="annual-investment"
            label="Annual Investment"
            required
            min="0"
            value={investments.annualInvestment}
            onChange={(event) =>
              handleChnge("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <UserInput
            type="number"
            id="expected-retrn"
            label="Expected Return"
            required
            min="0"
            value={investments.expectedReturn}
            onChange={(event) =>
              handleChnge("expectedReturn", event.target.value)
            }
          />
        </p>

        <p>
          <UserInput
            type="number"
            id="duration"
            label="Duration"
            required
            min="0"
            value={investments.duration}
            onChange={(event) => handleChnge("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
