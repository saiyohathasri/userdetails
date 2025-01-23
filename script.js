document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  
  // Log the form data (replace with your API call)
  console.log('Form submitted:', data);
  
  // Example phone number validation
  const phoneRegex = /^\+?[\d\s-()]+$/;
  if (!phoneRegex.test(data.phone)) {
    alert('Please enter a valid phone number');
    return;
  }
  
  // Example success message
  alert('Registration successful!');
  e.target.reset();
});