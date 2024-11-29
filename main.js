(function() {
  "use strict";

  // Handle form submission with AJAX
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this);

    fetch("YOUR_WEB_APP_URL", {
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
