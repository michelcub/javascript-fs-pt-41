const prompt = require('prompt-sync')({ sigint: true});

const paswordLength = prompt('Escribe el largo deseado de la contrasena : ');
function generateRandomPass(passwordLength) {
    const charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";
    let password = " ";
    for (let i = 0; i < passwordLength; i++){
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

const password = generateRandomPass(paswordLength);

console.log(password);