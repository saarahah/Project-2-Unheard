const usrProfileEmail = document.querySelector("#usrProfileEmail");
const usrProfileCity = document.querySelector("#usrProfileCity");
const usrProfileState = document.querySelector("#usrProfileState");
const usrProfileEmailUpdate = document.querySelector("#usrProfileEmailUpdate");
const usrProfileCityUpdate = document.querySelector("#usrProfileCityUpdate");
const usrProfileStateUpdate = document.querySelector("#usrProfileStateUpdate");

// References to the email, city and state
var usrInfoList = $("tbody");
var usrInfoContainer = $(".usrInfo-container");

// Get current User and display email information.
// Here you can display any User information coming from the server.
const userName = document.querySelector(".userName");
let userId = null;

fetch("/auth/user")
    .then((response) => response.json())
    .then((data) => {
        userId = data.id;
        userName.textContent = data.email;
        console.log("userID is " + userId);
        return userId;
    })
    .catch((err) => console.log(err))




// Submit Update Button for email
$("#submitBtnRegEmailUpdate").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    console.log("1 Email Update test");
    event.preventDefault();



    // packaging as object
    var updateEmail = {
        email: $("#usrProfileEmailUpdate").val().trim(),
    };
    id = userId
    console.log("id is " + id);
    // Send the put request.
    $.ajax("/api/update/email/" + id, {
        type: "PUT",
        data: updateEmail
    }).then(
        function (res) {
            console.log("4" + res);
            console.log("5 Updated Users Email" + updateEmail);
            // Reloads
            location.reload();
        }
    );
});

// Submit Update Button for password Do this last as it needs to be hashed
$("#submitBtnRegPasswordUpdate").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    console.log("Password Update test");
    event.preventDefault();
    // packaging as object
    var updatePassword = {
        password: $("#usrProfilePasswordUpdate").val().trim(),
    };
    console.log(updatePassword);
    // Send the put request.
    $.ajax("/api/update/password/", {
        // $.ajax("/api/update/password/", {
        // change to get
        type: "PUT",
        data: updatePassword
    }).then(
        function () {
            console.log("Updated Users Password" + updatePassword);
            // Reload the page to get the updated list
            location.reload();
        }
    );
});

// Submit Update Button for city
$("#submitBtnRegCityUpdate").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    console.log("City Update test");
    event.preventDefault();
    // packaging as object
    var updateCity = {
        city: $("#usrProfileCityUpdate").val().trim(),
    };
    console.log(updateCity);
    id = userId
    // Send the put request.
    $.ajax("/api/update/city/" + id, {
        // change to get
        type: "PUT",
        data: updateCity
    }).then(
        function () {
            console.log("Updated Users city");
            // Reload the page to get the updated list
            location.reload();
        }
    );
});

// Submit Update Button for state
$("#submitBtnRegStateUpdate").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    id = userId
    event.preventDefault();
    // packaging as object
    var updateState = {
        state: $("#usrProfileStateUpdate").val().trim(),
    };
    // Send the put request.
    $.ajax("/api/update/state/" + id, {
        // change to get
        type: "PUT",
        data: updateState
    }).then(
        function () {
            console.log("Updated Users state" + updateState);
            // Reload the page to get the updated list
            location.reload();
        }
    );
});


// Code to display current user email
$(document).ready(function () {
    var userName = document.querySelector(".userName");
    let userId = null;

    fetch("/auth/user")
        .then((response) => response.json())
        .then((data) => {
            console.log("2nd then data - " + data.email);
            userId = data.id;
            id = userId
            userName.textContent = data.email;
            // return userId;
        })
        .then(value => {
            console.log(".then console log userId " + userId);
            //We now have the user data in mySQL.  Need to figure out how to get their data from the table now
            console.log(".then userId test = " + id);
            $.ajax("/api/user/info/" + id, {
                type: "GET",
                data: userId
            })
        })
});