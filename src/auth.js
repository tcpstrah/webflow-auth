// Authentication module
function login(username, password) {
    // TODO: Implement
}

module.exports = { login };
function checkCredentials(username, password) {  // опечатка в названии
    return username && password;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

function login(username, password) {
    if (checkCredentials(username, password)) {
        return { success: true, token: 'abc123' };
    }
    return { success: false };
}
>>>>>>> 2168092 (Implement login function)
=======

console.log('Debug: auth module loaded');  // отладочный код
>>>>>>> 955b115 (WIP: debugging)
