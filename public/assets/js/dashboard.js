$(document).ready(function () {
  // Getting jQuery references to the post body, title, form, and author select
  var bodyInput = $("#body");
  console.log("front end" + bodyInput);
  var titleInput = $("#title");
  var storyForm = $("#story");
  console.log("front end" + storyForm);
  // var userSelect = $("#user");
  // Adding an event listener for when the form is submitted
  $(storyForm).on("submit", handleFormSubmit);
  // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
  // var url = window.location.search;
  // // console.log("front end" + url)
  // var postId;
  // var userId;
  // // Sets a flag for whether or not we're updating a post to be false initially
  // var updating = false;
  // // If we have this section in our url, we pull out the post id from the url
  // // In '?post_id=1', postId is 1
  // if (url.indexOf("?post_id=") !== -1) {
  //   postId = url.split("=")[1];
  //   getPostData(postId, "post");
  // }
  // // Otherwise if we have an author_id in our url, preset the author select box to be our Author
  // else if (url.indexOf("?user=") !== -1) {
  //   userId = url.split("=")[1];
  // }
  // console.log("this is the user id " + userId)
  // Getting the authors, and their posts
  // getUsers();
  // A function for handling what happens when the form to create a new post is submitted
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
    };
    console.log("this is " + JSON.stringify(newPost));
    // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    //   if (updating) {
    //     newPost.id = postId;
    //     updatePost(newPost);
    //   }
    //   else {
    submitPost(newPost);
    //   }
    // }
    // Submits a new post and brings user to blog page upon completion
    function submitPost(post) {
      $.post("/api/posts", post, function () {
        window.location.href = "/user/page2";
      });
    }
    // Gets post data for the current post if we're editing, or if we're adding to an author's existing posts
    // function getPostData(id, type) {
    //   var queryUrl;
    //   switch (type) {
    //   case "post":
    //     queryUrl = "/api/posts/" + id;
    //     break;
    //   case "user":
    //     queryUrl = "/api/users/" + id;
    //     break;
    //   default:
    //     return;
    //   }
    //     $.get(queryUrl, function(data) {
    //       if (data) {
    //         console.log(data.UserId || data.id);
    //         // If this post exists, prefill our cms forms with its data
    //         titleInput.val(data.title);
    //         bodyInput.val(data.body);
    //         userId = data.UserId || data.id;
    //         // If we have a post with this id, set a flag for us to know to update the post
    //         // when we hit submit
    //         updating = true;
    //       }
    //     });
  }
});
