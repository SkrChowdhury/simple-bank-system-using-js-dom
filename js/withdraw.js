/*
1. Add event handler with the withdraw button
2. get the withdraw amount fron withdraw input field
2-5. also make sure to convert the input into a number by using parseFloat
3. get previous withdraw total
4. Calculate total withdraw amount
4-5. Set total withdraw amount
5. Get the previous balance total
6. Calculate new balance total
6-5. Set the balance total

7. Clear the input field 
*/

// Step 1 :
document.getElementById('btn-withdraw').addEventListener('click', function () {
  // step 2:
  const withdrawField = document.getElementById('withdraw-field');
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  //   step 7
  withdrawField.value = '';

  if (isNaN(newWithdrawAmount)) {
    alert('Please enter a valid withdraw amount');
    return;
  }

  //   step 3
  const withdrawTotalElement = document.getElementById('withdraw-total');
  const previousWithdrawAmountString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawAmountString);

  //   step 5
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  if (newWithdrawAmount > previousBalanceTotal) {
    alert('You Dont have enough money to withdraw');
    return;
  }

  //   step 4
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  //   step 6
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;
});
