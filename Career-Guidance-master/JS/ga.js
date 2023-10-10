 // Get references to the button and message elements
 const submitButton = document.querySelector(".submit input[type='submit']");
 const message = document.getElementById("message");
 
 // Add a click event listener to the submit button
 submitButton.addEventListener("click", function(event) {
     // Prevent the default form submission behavior
     event.preventDefault();
 
     // Show the message
     message.style.display = "block";
 
     // You can add additional logic here if needed
 });