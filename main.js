(function() {
  "use strict";

  // Handle form submission with AJAX
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this);

    fetch("https://script.google.com/macros/s/AKfycby7VjkpI9b7qz4rC9B5QOXNhkgwDVRy9C53HWxU2vL_S9hdE9Pei0gwEasQ2-Zflmcc/exec", {
      method: "POST",
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      // Display success message
      document.querySelector('.sent-message').style.display = 'block';
      document.querySelector('.error-message').style.display = 'none';
    })
    .catch(error => {
      // Display error message
      document.querySelector('.error-message').textContent = "Something went wrong. Please try again.";
      document.querySelector('.error-message').style.display = 'block';
    });
  });

})();
