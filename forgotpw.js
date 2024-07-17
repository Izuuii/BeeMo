document.addEventListener('DOMContentLoaded', function() {
    const forgotForm = document.getElementById('forgotForm');
    const emailInput = document.getElementById('floatingInput1');
    
    emailInput.addEventListener('input', function() {
        if (emailInput.validity.valid) {
            emailInput.classList.remove('is-invalid');
        } else {
            emailInput.classList.add('is-invalid');
        }
    });
    
    forgotForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (emailInput.validity.valid) {
            // Reset any previous invalid state
            emailInput.classList.remove('is-invalid');
            
            // Proceed with sending recovery link (simulated here)
            alert('Sending recovery link to ' + emailInput.value);
            
            // Optionally, redirect to index.html after sending
            window.location.href = 'resetpw2.html';
        } else {
            emailInput.classList.add('is-invalid');
        }
    });
});