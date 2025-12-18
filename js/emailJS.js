document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("7CvrZ3DWy-O1HKGmG");

  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm("service_k4ljw6p", "template_l1qqq3i", this)
      .then(() => {
        alert("✅ Message sent successfully!");
        contactForm.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Failed to send message");
      });
  });
});
