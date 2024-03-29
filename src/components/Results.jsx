import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ investments }) {
  const investmentsResult = calculateInvestmentResults(investments);
  const initialInvestment =
    investmentsResult[0].valueEndOfYear -
    investmentsResult[0].interest -
    investmentsResult[0].annualInvestment;

  const results = investmentsResult.map((investment, index) => {
    const { year, interest, valueEndOfYear, annualInvestment } = investment;
    const totalInterestValue =
      valueEndOfYear - annualInvestment * year - initialInvestment;

    const totalAmountInvested = valueEndOfYear - totalInterestValue;

    return (
      <tr key={index}>
        <td>{year}</td>
        <td>{formatter.format(valueEndOfYear)}</td>
        <td>{formatter.format(interest)}</td>
        <td>{formatter.format(totalInterestValue)}</td>
        <td>{formatter.format(totalAmountInvested)}</td>
      </tr>
    );
  });

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>{results}</tbody>
    </table>
  );
}
