document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        clearErrors();

        let valid = true;

        // Validate Name
        const name = document.getElementById('name');
        if (name.value.trim() === '') {
            showError(name, 'Please enter your name.');
            valid = false;
        }

        // Validate Email
        const email = document.getElementById('email');
        if (email.value.trim() === '') {
            showError(email, 'Please enter your email.');
            valid = false;
        } else if (!validateEmail(email.value.trim())) {
            showError(email, 'Please enter a valid email address.');
            valid = false;
        }

        // Validate Subject
        const subject = document.getElementById('subject');
        if (subject.value.trim() === '') {
            showError(subject, 'Please enter a subject.');
            valid = false;
        }

        // Validate Message
        const message = document.getElementById('message');
        if (message.value.trim() === '') {
            showError(message, 'Please enter your message.');
            valid = false;
        }

        // If the form is valid, you can submit it via AJAX or just show a success message
        if (valid) {
            alert('Your message has been sent successfully!');
            form.reset(); // Reset the form
        }
    });

    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorElement = document.createElement('div');
        errorElement.className = 'error';
        errorElement.innerText = message;
        formGroup.appendChild(errorElement);
        input.classList.add('error-border');
    }

    function clearErrors() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => error.remove());

        const inputs = document.querySelectorAll('.error-border');
        inputs.forEach(input => input.classList.remove('error-border'));
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
