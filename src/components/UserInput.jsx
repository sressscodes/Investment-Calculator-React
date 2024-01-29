export default function UserInput({handleChange, userInput}) {
  return(
    <div id="user-input">
      <form className="input-group">
        <p>
        <label>Initial Investment:
          <input type="number" required value={userInput.initialInvestment} onChange={(event) => handleChange('initialInvestment', event.target.value)}/>
        </label>
        </p>
        <p>
        <label>Annual Investment:
          <input type="number" required value={userInput.annualInvestment} onChange={(event) => handleChange('annualInvestment', event.target.value)}/>
        </label>
        </p>
      </form>
      <form className="input-group">
        <p>
        <label>Expected return:
          <input type="number" required value={userInput.expectedReturn} onChange={(event) => handleChange('expectedReturn', event.target.value)}/>
        </label>
        </p>
        <p>
        <label>Duration:
          <input type="number" required value={userInput.duration} onChange={(event) => handleChange('duration', event.target.value)}/>
        </label>
        </p>
      </form>
    </div>
  )
}