const backToTopLink = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    backToTopLink.style.display = "block";
  } else {
    backToTopLink.style.display = "none";
  }
});

backToTopLink.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});