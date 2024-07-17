document.addEventListener("DOMContentLoaded", function() {
    const togglePassword = document.querySelector('#togglePassword');
    const passwordField = document.querySelector('#floatingPassword');

    
    const toggleVisibility = function(field, toggle) {
        // Toggle the type attribute for the field
        const type = field.getAttribute('type') === 'password' ? 'text' : 'password';
        field.setAttribute('type', type);
        
        // Toggle the eye icon
        toggle.querySelector('i').classList.toggle('fa-eye');
        toggle.querySelector('i').classList.toggle('fa-eye-slash');
    };

    togglePassword.addEventListener('click', function() {
        toggleVisibility(passwordField, togglePassword);
    });
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('floatingInput');
    var password = document.getElementById('floatingPassword');

    var emailValid = email.checkValidity();
    var passwordValid = password.checkValidity();

    if (emailValid && passwordValid) {
        email.classList.remove('is-invalid');
        password.classList.remove('is-invalid');
        this.submit();
    } else {
        if (!emailValid) {
            email.classList.add('is-invalid');
        } else {
            email.classList.remove('is-invalid');
        }

        if (!passwordValid) {
            password.classList.add('is-invalid');
        } else {
            password.classList.remove('is-invalid');
        }
    }
});

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate all fields here

    if (allFieldsValid) {
        // Remove invalid feedback and submit the form
        loginForm.submit();
    } else {
        // Show invalid feedback for each field
    }
});

