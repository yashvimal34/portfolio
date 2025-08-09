document.getElementById("contactForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const status = document.getElementById("form-status");
  const data = new FormData(e.target);
  
  const response = await fetch("https://formspree.io/f/xgvzzweq", {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" }
  });

  if (response.ok) {
    status.textContent = "Message sent successfully!";
    e.target.reset();
  } else {
    status.textContent = "Oops! Something went wrong.";
  }
});
