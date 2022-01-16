let faqItems;

document.addEventListener("DOMContentLoaded", e => {
  faqItems = [...document.getElementsByClassName("faqs__item")];

  faqItems.forEach(faq => {
    faq.addEventListener("click", () => {
      let faqAnswer = faq.children[2];
      let faqArrow = faq.children[1];

      if (faqAnswer.style.display === "block") {
        faqAnswer.style.display = "none";
        faqArrow.style.transform = "rotateX(0deg)";
      } else {
        closeAllFaqs();  // All FAQs that are already open, are closed
        faqAnswer.style.display = "block";
        faqArrow.style.transform = "rotateX(180deg)";
      }
    });
  });
});

closeAllFaqs = () => {
  faqItems.forEach(faq => {
    let faqAnswer = faq.children[2];
    let faqArrow = faq.children[1];

    faqAnswer.style.display = "none";
    faqArrow.style.transform = "rotateX(0deg)";
  });
};