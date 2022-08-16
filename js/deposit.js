// Step 1 : add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
  //Step 2 : get the deposit amount from the deposit input field
  // For input field use .value to the value inside the input field

  const depositField = document.getElementById('deposit-field');
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  // Step 3 : get the current deposit total

  //   for non-inputMode element (other than input, textarea) use innerText to get the text
  const depositTotalElement = document.getElementById('deposit-total');
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  // Step 4 : Add numbers to set the total deposit
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  // ser the deposit total

  depositTotalElement.innerText = currentDepositTotal;

  // Step 5: Get balance current total

  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // Step 6 : Calculate current total balance

  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

  // Set the balance total
  balanceTotalElement.innerText = currentBalanceTotal;

  // step 7: Clear the deposit Field
  depositField.value = '';
});
