/* emailHandler.js */
function captureEmail(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  // Dummy email capture handling
  console.log("Captured email:", email);
  alert("Thank you for subscribing! Check your inbox for bonus alerts.");
  // Integration with an email API such as Resend or Mailchimp would go here
  document.getElementById('email-form').reset();
}
