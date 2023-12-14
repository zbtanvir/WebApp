document.addEventListener('DOMContentLoaded', function () {
    const signinForm = document.getElementById('signin-form');
  
    signinForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // Get form data
      const usernameOrEmail = signinForm.querySelector('#username').value;
      const password = signinForm.querySelector('#password').value;
  
      // Handle signin logic (replace with your actual signin logic)
      console.log(`Signin: Username/Email - ${usernameOrEmail}, Password - ${password}`);
      
      // Redirect to home page or perform other actions after successful signin
      alert('Signin successful! Redirecting to Home.');
      window.location.href = 'index.html';
    });
  });
  