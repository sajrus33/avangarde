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
        typeForm.classList.toggle("displayNone");
        typeForm.nextElementSibling.classList.toggle("displayNone");
    });
});
// second form
const specialists = document.querySelectorAll(".specialist__a");
const specialistForm = document.querySelector(".register__section--second");

specialists.forEach(specialist => {
    console.log({ specialist });

    specialist.addEventListener("click", () => {
        specialistForm.classList.toggle("displayNone");
        specialistForm.nextElementSibling.classList.toggle("displayNone");
    });
});

// thirt form
const dates = document.querySelectorAll(".date__a");
const dateForm = document.querySelector(".register__section--thirt");

dates.forEach(date => {
    console.log({ date });

    date.addEventListener("click", () => {
        dateForm.classList.toggle("displayNone");
        dateForm.nextElementSibling.classList.toggle("displayNone");
    });
});


// fourth form
const summaryBtnCancel = document.querySelector(".summary__button--cancel");
const summaryBtnRegister = document.querySelector(".summary__button--register");

const summaryForm = document.querySelector(".register__section--fourth");


const chwiloweGuziki = document.querySelectorAll(".summary__button");

chwiloweGuziki.forEach(guzik => {
    guzik.addEventListener("click", () => {
        summaryForm.classList.toggle("displayNone");
        summaryForm.nextElementSibling.classList.toggle("displayNone");
    });
});

console.log({ types });