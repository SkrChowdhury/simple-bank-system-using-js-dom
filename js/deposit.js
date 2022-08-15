// Step 1 : add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
  //Step 2 : get the deposi amount from the deposit input field

  const depositField = document.getElementById('deposit-field');
  const depositAmount = depositField.value;

  // Step 3 : get the current deposit total

  //   for non-inputMode element (other than input, textarea) use innerText to get the text
  const depositTotalElement = document.getElementById('deposit-total');
  const depositTotal = depositTotalElement.innerText;
  depositTotalElement.innerText = depositAmount;
});
