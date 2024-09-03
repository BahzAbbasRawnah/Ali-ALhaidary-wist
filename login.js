// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Clear previous errors
    clearErrors();

    // Get form elements
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const terms = document.getElementById('terms').checked;

    let valid = true;

    // Validate name
    if (name === '') {
        showError('nameError', 'Name is required.');
        valid = false;
    }

    // Validate email
    if (email === '') {
        showError('emailError', 'Email is required.');
        valid = false;
    } else if (!validateEmail(email)) {
        showError('emailError', 'Invalid email format.');
        valid = false;
    }

    // Validate password
    if (password === '') {
        showError('passwordError', 'Password is required.');
        valid = false;
    } else if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters long.');
        valid = false;
    }

    // Validate terms
    if (!terms) {
        showError('termsError', 'You must accept the terms and conditions.');
        valid = false;
    }

    // If all validations pass, submit the form
    if (valid) {
        this.submit();
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

function showError(id, message) {
    document.getElementById(id).textContent = message;
}

function clearErrors() {
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('termsError').textContent = '';
}
