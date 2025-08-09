  const roles = [
    "Full Stack Developer",
    "Python Developer",
    "learning Data Science *"
  ];

  let index = 0;
  const roleText = document.getElementById("role-text");

  setInterval(() => {
    roleText.classList.add("fade");
    setTimeout(() => {
      index = (index + 1) % roles.length;
      roleText.textContent = roles[index];
      roleText.classList.remove("fade");
    }, 400); // fade duration
  }, 2000);