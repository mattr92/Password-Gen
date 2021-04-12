// variables for password
var blank = "";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWUXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var nums = "0123456789";
var symb = "!@#$%^&*";
//variables to call the characters from html
const pwlength = 
document.getElementById("pw-length");
const pwupper = 
document.getElementById("pw-upper");
const pwlower = 
document.getElementById("pw-lower");
const pnumb = 
document.getElementById("pw-numbers");
const symbols = 
document.getElementById("pw-symbols");
const generate = 
document.getElementById("generate");
const password = 
document.getElementById("password");



/* Add event listener to generate button, Arrow in place of
functiom. If boxes are checked will return value in generated
 password*/
generate.addEventListener("click", () => {
    let blankpassword = blank;
    (pwupper.checked) ? blankpassword += upper : "";
    (pwlower.checked) ? blankpassword += lower : "";
    (pnumb.checked) ? blankpassword += nums : "";
    (symbols.checked) ? blankpassword += symb : "";

    password.value = generatePassword(pwlength.value,
        blankpassword)
});
//Generate button press will generate password
function generatePassword(g, blankpassword) {
    let pass = "";
    for (let i = 0; i < g; i++) {
    //will return the characters that are called upon randomly
        pass += blankpassword.charAt(Math.floor(Math.
        random() * blankpassword.length));
    }
    return pass;
}
