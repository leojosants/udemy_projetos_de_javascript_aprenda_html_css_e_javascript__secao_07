/* selected elements */
const form = document.querySelector('[data_form]');
const name = document.querySelector('[data_name]');
const email = document.querySelector('[data_email]');
const subject = document.querySelector('[data_subject]');
const message = document.querySelector('[data_message]');
const errorMessage = document.querySelectorAll('[data_error_message]');

/* events */
form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateInputs();
});

/* functions */
function setError(input, errorMessage) {
    const errorMessageElement = input.nextElementSibling;
    errorMessageElement.textContent = errorMessage;
    input.parentElement.classList.add('error');
};

function validateInputs() {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();
    const msg = 'Campo não pode ficar em branco';

    if (nameValue === '') { setError(name, msg); }
    if (emailValue === '') { setError(email, msg); }
    if (subjectValue === '') { setError(subject, msg); }
    if (messageValue === '') { setError(message, msg); }
};