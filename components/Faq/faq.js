const toggleIcons = document.querySelectorAll(".toggle-icon");

toggleIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const faqItem = icon.closest("div").parentElement;
    const answer = faqItem.querySelector("p");

    answer.classList.toggle("active");
    icon.classList.toggle("active");
  });
});
