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
window.onscroll = () => {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
};
moveToTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
