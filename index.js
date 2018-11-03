// Aux function: round a given number to n decimals
const round = (num, decimals = 2) => {
  if (!num) return null;
  return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

// Function to calculate fee and amortization table
module.exports = (amount, interest, months, genTable = true, decimals = 2) => {
  const monthlyInterest = interest / 100 / 12;
  const factor = Math.pow(1 + monthlyInterest, months);
  const fee = amount * monthlyInterest * factor / (factor - 1);
  let result = {
    amount,
    fee: round(fee, decimals),
    totalInterest: round((fee * months) - amount, decimals),
    total: round(fee * months, decimals)
  };
  if (genTable) {
    let table = [];
    let initialAmount = amount;
    let totalInterest = 0;
    let totalAmortization = 0;
    for (let month=1; month<=months; month++) {
      const interest = initialAmount * monthlyInterest;
      const amortization = fee - interest;
      totalAmortization += amortization;
      totalInterest += interest;
      finalAmount = initialAmount - amortization;
      initialAmount = finalAmount;
      const row = {
        month,
        fee: round(fee, decimals),
        interest: round(interest, decimals),
        amortization: round(amortization, decimals),
        totalInterest: round(totalInterest, decimals),
        totalAmortization: round(totalAmortization, decimals),
        pendingAmount: round(finalAmount, decimals)
      };
      table.push(row);
    }
    result.table = table;
    return result;
  }
}
