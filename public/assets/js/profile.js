const usrProfileEmail = document.querySelector("#usrProfileEmail");
const usrProfileCity = document.querySelector("#usrProfileCity");
const usrProfileState = document.querySelector("#usrProfileState");
const usrProfileEmailUpdate = document.querySelector("#usrProfileEmailUpdate");
const usrProfileCityUpdate = document.querySelector("#usrProfileCityUpdate");
const usrProfileStateUpdate = document.querySelector("#usrProfileStateUpdate");

    // References to the email, city and state
    var usrInfoList = $("tbody");
    var usrInfoContainer = $(".usrInfo-container");





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
    //need to find the id for the user and declare it below
    id = 
    // Send the put request.
    $.ajax("/api/update/email/", {
        // change to get
        type: "PUT",
        data: updateEmail
    }).then(
        function (res) {
            console.log(res);
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


// Code to display current user email
// $(document).ready(function () {
//     function getUserInfo() {
//         $ajax("api/user/info", function (data) {
//             var rowsToAdd = [];
//             for (var i = 0; i < data.length; i++) {
//                 rowsToAdd.push(createAuthorRow(data[i]));
//             }
//             renderUserList(rowsToAdd);
//             nameInput.val("");
//         });
//     }

//     // A function for rendering the list of authors to the page
//     function renderUserList(rows) {
//         usrInfoList.children().not(":last").remove();
//         usrInfoContainer.children(".alert").remove();
//         if (rows.length) {
//             console.log(rows);
//             authorList.prepend(rows);
//         }
//         else {
//             renderEmpty();
//         }
//     }


// };