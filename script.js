

document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent actual submission to FormSubmit

  // Show the alert
  document.getElementById("customAlert").style.display = "block";

  // Optionally clear the form fields
  this.reset();

  // Hide after 3 seconds
  setTimeout(function () {
    document.getElementById("customAlert").style.display = "none";
  }, 3000);
});





  