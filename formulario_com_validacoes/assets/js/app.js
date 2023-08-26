/* selected elements */
const form = document.querySelector('[data_form]');
const name = document.querySelector('[data_name]');
const email = document.querySelector('[data_email]');
const subject = document.querySelector('[data_subject]');
const message = document.querySelector('[data_message]');
const errorMessages = document.querySelectorAll('[data_error_message]');

/* events */
form.addEventListener('submit', (event) => {
    event.preventDefault();
    resetErrors();
    validateInputs();
});

/* functions */
function resetErrors() {
    errorMessages.forEach((msg) => {
        msg.textContent = '';
    });

    name.parentElement.classList.remove('error');
    email.parentElement.classList.remove('error');
    subject.parentElement.classList.remove('error');
    message.parentElement.classList.remove('error');
};

function setError(input, errorMessages) {
    const errorMessageElement = input.nextElementSibling;
    errorMessageElement.textContent = errorMessages;
    input.parentElement.classList.add('error');
};

function validateInputs() {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();
    const msg = 'Campo não pode ficar em branco!';

    if (nameValue === '') { setError(name, msg); }

    if (emailValue === '') {
        setError(email, msg);
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'E-mail inválido');
    }

    if (subjectValue === '') { setError(subject, msg); }
    if (messageValue === '') { setError(message, msg); }
};

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+.[^\s@]+$/.test(email);
};