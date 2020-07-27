$(document).ready(function () {
  // Getting jQuery references to the post body, title, form, and author select
  var bodyInput = $("#body");
  console.log("front end" + bodyInput);
  var titleInput = $("#title");
  var storyForm = $("#story");
  console.log("front end" + storyForm);
  var lat = null;
  var long = null;

  navigator.geolocation.getCurrentPosition(function (position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
  });

  $(storyForm).on("submit", handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body, title, or author
    if (!titleInput.val().trim() || !bodyInput.val().trim()) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newPost = {
      title: titleInput.val().trim(),
      body: bodyInput.val().trim(),
      UserId: userId,
      lat: lat,
      long: long,
    };
    console.log("this is " + JSON.stringify(newPost));
    submitPost(newPost);
    //   }
    // }
    // Submits a new post and brings user to blog page upon completion
    function submitPost(post) {
      $.post("/api/posts", post, function () {
        window.location.href = "/user/page2";
      });
    }
  }
});
