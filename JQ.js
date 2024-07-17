document.addEventListener("DOMContentLoaded", function() {
    const togglePassword = document.querySelector('#togglePassword');
    const passwordField = document.querySelector('#floatingPassword');

    const toggleVisibility = function(field, toggle) {
        const type = field.getAttribute('type') === 'password' ? 'text' : 'password';
        field.setAttribute('type', type);
        toggle.querySelector('i').classList.toggle('fa-eye');
        toggle.querySelector('i').classList.toggle('fa-eye-slash');
    };

    togglePassword.addEventListener('click', function() {
        toggleVisibility(passwordField, togglePassword);
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
            window.location.href = 'home.html'; // Redirect to home page
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
});