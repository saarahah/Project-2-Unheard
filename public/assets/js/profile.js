const usrProfileEmail = document.querySelector("#usrProfileEmail");
const usrProfileCity = document.querySelector("#usrProfileCity");
const usrProfileState = document.querySelector("#usrProfileState");
const usrProfileEmailUpdate = document.querySelector("#usrProfileEmailUpdate");
const usrProfileCityUpdate = document.querySelector("#usrProfileCityUpdate");
const usrProfileStateUpdate = document.querySelector("#usrProfileStateUpdate");
// const submitBtnReg = document.querySelector("#submitBtnReg");
// const rowAlertReg = document.querySelector(".alertAppendReg");
// const divAlertReg = document.createElement("div");




// Send the PUT request.
// $.ajax("/api/update/" + id, {
//     type: "PUT",
//     data: newSleepState
// }).then(
//     function () {
//         console.log("changed sleep to", newSleep);
//         // Reload the page to get the updated list
//         location.reload();
//     }
// );

// Submit Update Button for email
$("#submitBtnRegEmailUpdate").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    console.log("Email Update test");
    event.preventDefault();
    // packaging as object
    var updateEmail = {
        email: $("#usrProfileEmailUpdate").val().trim(),
    };
console.log(updateEmail);
    // Send the put request.
    $.ajax("/api/update/email", {
        // change to get
        type: "PUT",
        data: updateEmail
    }).then(
        function () {
            console.log("Updated Users Email" + updateEmail);
            // Reload the page to get the updated list
            location.reload();
        }
    );
});

// Submit Update Button for password
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
    // Send the put request.
    $.ajax("/api/update/city/", {
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
    console.log("State Update test");
    event.preventDefault();
    // packaging as object
    var updateState = {
        state: $("#usrProfileStateUpdate").val().trim(),
    };
console.log(updateState);
    // Send the put request.
    $.ajax("/api/update/state/", {
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