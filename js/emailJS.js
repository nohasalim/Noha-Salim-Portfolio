//  Initialize EmailJS with  Public Key
emailjs.init("7CvrZ3DWy-O1HKGmG");

// Handle the form submission
const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload

  emailjs
    .sendForm("service_k4ljw6p", "template_l1qqq3i", contactForm)
    .then(() => {
      alert("✅ Message sent successfully!");
      contactForm.reset(); // Clear the form
    })
    .catch((error) => {
      alert("❌ Failed to send message: " + error.text);
    });
});
