document.myform.onsubmit = function (event) {
    if (!validate()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
};

var validate = function () {
    var isValid = true;

    // Gender validation
    var userInput = null;
    var radioButtons = document.myform.gender;
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            userInput = radioButtons[i].value;
            break;
        }
    }
    if (userInput == null) {
        document.getElementById("genderError").innerHTML = "Gender is required";
        isValid = false;
    } else {
        document.getElementById("genderError").innerHTML = "";
    }

    // Username validation
    var username = document.myform.username.value;
    if (username.length < 5) {
        // Error message for username
        document.getElementById("username").classList.add("error");
        isValid = false;
    } else {
        document.getElementById("username").classList.remove("error");
    }

    // Password validation
    var password = document.myform.password.value;
    if (password.length < 5) {
        // Error message for password
        document.getElementById("password").classList.add("error");
        isValid = false;
    } else {
        document.getElementById("password").classList.remove("error");
    }

    // Confirm Password validation
    var confirmPassword = document.myform.confirmPassword.value;
    if (password !== confirmPassword) {
        // Error message for confirm password
        document.getElementById("confirmPassword").classList.add("error");
        isValid = false;
    } else {
        document.getElementById("confirmPassword").classList.remove("error");
    }

    // Email validation
    var email = document.myform.email.value;
    if (email === "") {
        // Error message for email
        document.getElementById("email").classList.add("error");
        isValid = false;
    } else {
        document.getElementById("email").classList.remove("error");
    }

    // Contact Number validation
    var contact = document.myform.contactNumber.value;
    if (contact !== "" && !/^\d+$/.test(contact)) {
        // Error message for contact number
        document.getElementById("contactNumber").classList.add("error");
        isValid = false;
    } else {
        document.getElementById("contactNumber").classList.remove("error");
    }

    return isValid;
};