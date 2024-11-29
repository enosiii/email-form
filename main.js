(function() {
  "use strict";

  // Handle form submission with AJAX
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this);

    // Show the loading message and hide other messages
    document.querySelector('.loading').style.display = 'block';
    document.querySelector('.sent-message').style.display = 'none';
    document.querySelector('.error-message').style.display = 'none';

    fetch("https://script.google.com/macros/s/AKfycby7VjkpI9b7qz4rC9B5QOXNhkgwDVRy9C53HWxU2vL_S9hdE9Pei0gwEasQ2-Zflmcc/exec", {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      return response.text();
    })
    .then(data => {
      // Hide the loading message and display the success message
      document.querySelector('.loading').style.display = 'none';
      document.querySelector('.sent-message').style.display = 'block';

      // Clear the message field
      document.getElementById("message-field").value = '';
    })
    .catch(error => {
      // Hide the loading message and display the error message
      document.querySelector('.loading').style.display = 'none';
      document.querySelector('.error-message').textContent = "Something went wrong. Please try again.";
      document.querySelector('.error-message').style.display = 'block';
    });
  });

})();
