const userName = document.querySelector(".userName");
let userId = null;
// Get current User and display email information.
// Here you can display any User information coming from the server.
fetch("/auth/user")
  .then((response) => response.json())
  .then((data) => {
    userId = data.id;
    userName.textContent = data.email;
    console.log(userId);
  })
  .catch((err) => console.log(err));
