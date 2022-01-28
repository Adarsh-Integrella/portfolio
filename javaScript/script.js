const slideUpMenu = document.getElementById("closeMenu");
const moveToTop = document.getElementById("moveToTop");
const aboutButton = document.getElementsByClassName("aboutme");

slideUpMenu.addEventListener("click", () => {
  const upperMenu = document.getElementById("lowerBar");
  if (upperMenu.style.display === "none") {
    upperMenu.style.display = "block";
  } else {
    upperMenu.style.display = "none";
  }
});

moveToTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
