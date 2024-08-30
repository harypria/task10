document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var phone = document.getElementById('phone').value;
 // Error message elements
 var phoneError = document.getElementById('phone-error');

 // Clear previous error messages
 phoneError.textContent = '';

 // Validate phone number (check if it's numeric)
 var phoneRegex = /^\d+$/; // Regular expression to match only digits
 if (!phoneRegex.test(phone)) {
     phoneError.textContent = 'Phone number must be numeric.';
     return; // Stop further validation and form submission
 }


    if (password !== confirmPassword) {
        alert('Passwords do not match!');
    } else {
        // Redirect to submit.html if passwords match
        window.location.href = 'submit.html';
    }
});
