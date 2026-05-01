const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

function openModal(link) {
  const modal = document.getElementById("modal");
  const frame = document.getElementById("modalFrame");

  modal.style.display = "block";
  frame.src = link;
}

function closeModal() {
  const modal = document.getElementById("modal");
  const frame = document.getElementById("modalFrame");

  modal.style.display = "none";
  frame.src = "";
}

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    question.parentElement.classList.toggle("active");
  });
});