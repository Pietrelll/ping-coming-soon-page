const email = document.querySelector('#email');

function validate_email() {
    if (!email.checkValidity()) {
        document.getElementById("error").innerHTML = "E-mail is not correct";
        return false;
    } else {
        document.getElementById("error").innerHTML = "";
        return true;
    }
}