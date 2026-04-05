// Validation utilities
function validateEmail(email) {
    return email.includes('@');
}

module.exports = { validateEmail };

<<<<<<< HEAD
<<<<<<< HEAD
function sanitizeInput(input) {
    return input.replace(/[<>]/g, '');  // защита от XSS
=======
function validatePassword(password) {
    return password.length >= 8;
>>>>>>> 2b03f48 (Add password validation)
=======
function validatePassword(password) {
    return password.length >= 8;
=======
function sanitizeInput(input) {
    return input.replace(/[<>]/g, '');  // защита от XSS
>>>>>>> 9af46aa (Critical security patch: use HTTPS and add input sanitization)
>>>>>>> f966cdb (Critical security patch: use HTTPS and add input sanitization)
}
