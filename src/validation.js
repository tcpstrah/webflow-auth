// Validation utilities
function validateEmail(email) {
    return email.includes('@');
}

module.exports = { validateEmail };

<<<<<<< HEAD
function sanitizeInput(input) {
    return input.replace(/[<>]/g, '');  // защита от XSS
=======
function validatePassword(password) {
    return password.length >= 8;
>>>>>>> 2b03f48 (Add password validation)
}
