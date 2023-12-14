document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');
  
    signupForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // Get form data
      const firstName = signupForm.querySelector('#firstName').value;
      const lastName = signupForm.querySelector('#lastName').value;
      const address = signupForm.querySelector('#address').value;
      const phoneNumber = signupForm.querySelector('#phoneNumber').value;
      const email = signupForm.querySelector('#email').value;
      const username = signupForm.querySelector('#username').value;
      const password = signupForm.querySelector('#password').value;
  
      // Handle signup logic (replace with your actual signup logic)
      console.log(`Signup: First Name - ${firstName}, Last Name - ${lastName}, Address - ${address}, Phone Number - ${phoneNumber}, Email - ${email}, Username - ${username}, Password - ${password}`);
  
      // Redirect to sign-in page after successful signup
      alert('Signup successful! Redirecting to Sign In.');
      window.location.href = 'signin.html';
    });
  });
  