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
$("submitBtnReg").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    // packaging as object
    var updateEmail = {
        email: $("#usrProfileEmailUpdate").val().trim(),
    };
console.log(updateEmail);
    // Send the put request.
    $.ajax("/api/update/email/", {
        // change to get
        type: "PUT",
        data: email
    }).then(
        function () {
            console.log("Updated Users Email");
            // Reload the page to get the updated list
            location.reload();
        }
    );
});