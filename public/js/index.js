// progress
const progressBars = document.querySelectorAll(".progress__bar");
const progressImgs = document.querySelectorAll(".progress__img");
// all forms
const forms = document.querySelectorAll(".register__section");
// first form
const types = document.querySelectorAll(".type__a");
const typeForm = document.querySelector(".register__section--first");

types.forEach(type => {
    console.log({ type });

    type.addEventListener("click", () => {
        typeForm.classList.add("displayNone");
        typeForm.nextElementSibling.classList.remove("displayNone");
    });
})
// second form
const specialists = document.querySelectorAll(".specialist__a");
const specialistForm = document.querySelector(".register__section--second");

specialists.forEach(specialist => {
    console.log({ specialist });

    specialist.addEventListener("click", () => {
        specialistForm.classList.add("displayNone");
        specialistForm.nextElementSibling.classList.remove("displayNone");
    });
})




console.log({ types });