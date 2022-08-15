// Step 1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
  // Step 2: get the email address inside the email input field
  // Always remember to use .value to get text from an input field
  const emailField = document.getElementById('user-email');
  const email = emailField.value;

  // Step 3: Get Password
  // 3(a) : Set id on the HTML element
  // 3(b) :Get the element
  // 3(c) :Get the value from the element

  const passwordField = document.getElementById('user-password');
  const password = passwordField.value;

  //DANGER : DO NOT VERIFY email or password on the client side

  if (email === 'user1@gmail.com' && password === 'user1') {
    window.location.href = 'bank.html';
  } else {
    alert('Please enter valid credentials');
  }
});
