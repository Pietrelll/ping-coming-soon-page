const emailField = document.querySelector('#email');
const errorField = document.querySelector('#error')
function validateEmail() {
    if (!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        errorField.innerHTML = "Please provide a valid email address"
        errorField.style.fontSize = "0.7rem";
        errorField.style.marginBottom = "1rem";
        errorField.style.marginTop = "0.5rem";
        errorField.style.gridArea = "c";
        emailField.style.border = "1px solid hsl(354, 100%, 66%)";
        return false;
    }
    errorField.innerHTML = "";
    return true;
}