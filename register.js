document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registration-form');
    
    registrationForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      const userData = { username, email, password };
  
      try {
        const response = await fetch('/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
  
        if (response.status === 200) {
          alert('Registration successful');
          window.location.href = '/login.html'; // Redirect to login page
        } else {
          alert('Registration failed');
        }
      } catch (error) {
        console.error('Registration error:', error);
      }
    });
  });
  