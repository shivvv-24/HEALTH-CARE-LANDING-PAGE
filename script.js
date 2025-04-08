// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".header__form form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent page refresh
  
      // Get values
      const firstName = form.querySelector('input[placeholder="First Name"]').value.trim();
      const lastName = form.querySelector('input[placeholder="Last Name"]').value.trim();
      const address = form.querySelector('input[placeholder="Address"]').value.trim();
      const phone = form.querySelector('input[placeholder="Phone No."]').value.trim();
  
      // Basic validation
      if (!firstName || !lastName || !address || !phone) {
        alert("Please fill in all fields.");
        return;
      }
  
      // Optional: Validate phone number format
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
      }
  
      // Success message (you can customize this)
      alert(`Thank you, ${firstName}! Your appointment has been booked.`);
  
      // Optionally clear the form
      form.reset();
    });
  });
  