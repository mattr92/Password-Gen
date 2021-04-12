// variables for password
const empty = "";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWUXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const nums = "0123456789";
const symb = "!@#$%^&*";
//variables to call the characters from html
const pwlength = document.getElementById("pw-length");
const pwupper = document.getElementById("pw-upper");
const pwlower = document.getElementById("pw-lower");
const pnumb = document.getElementById("pw-numbers");
const symbols = document.getElementById("pw-symbols");
const generate = document.getElementById("generate");
const password = document.getElementById("password");



/* Add event listener to generate button, Arrow in place of
functiom. If boxes are checked will return value in generated
 password*/
generate.addEventListener("click", () => {
    let initialPassword = empty;
    (pwupper.checked) ? initialPassword += upper : "";
    (pwlower.checked) ? initialPassword += lower : "";
    (pnumb.checked) ? initialPassword += nums : "";
    (symbols.checked) ? initialPassword += symb : "";

    password.value = generatePassword(pwlength.value,
        initialPassword)
});
//Generate button press will generate password
function generatePassword(l, initialPassword) {
    let pass = "";
    for (let i = 0; i < l; i++) {
    //will return the characters that are called upon randomly
        pass += initialPassword.charAt(Math.floor(Math.
        random() * initialPassword.length));
    }
    return pass;
}
