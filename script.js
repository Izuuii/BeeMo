document.getElementById('workerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var fullName = document.getElementById('fullName');
    var email = document.getElementById('email');
    var phoneNumber = document.getElementById('phoneNumber');
    var password = document.getElementById('password');

    var fullNameValid = fullName.checkValidity();
    var emailValid = email.checkValidity();
    var phoneNumberValid = phoneNumber.checkValidity();
    var passwordValid = password.checkValidity();

    if (fullNameValid && emailValid && phoneNumberValid && passwordValid) {
        fullName.classList.remove('is-invalid');
        email.classList.remove('is-invalid');
        phoneNumber.classList.remove('is-invalid');
        password.classList.remove('is-invalid');
        this.submit();
    } else {
        if (!fullNameValid) {
            fullName.classList.add('is-invalid');
        } else {
            fullName.classList.remove('is-invalid');
        }

        if (!emailValid) {
            email.classList.add('is-invalid');
        } else {
            email.classList.remove('is-invalid');
        }

        if (!phoneNumberValid) {
            phoneNumber.classList.add('is-invalid');
        } else {
            phoneNumber.classList.remove('is-invalid');
        }

        if (!passwordValid) {
            password.classList.add('is-invalid');
        } else {
            password.classList.remove('is-invalid');
        }
    }
});


