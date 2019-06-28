// progress
const progressBars = document.querySelectorAll(".progress__bar");
const progressImgs = document.querySelectorAll(".progress__img");

const runProgress = amount => {
  progressBars.forEach((bar, index) => {
    if (index === amount) {
      bar.classList.toggle("progress__bar--active");
      progressImgs[index].src = "/avangarde/public/img/progress--done--big.png";
      progressImgs[index].classList.toggle("progress__img--active");
    }
  });
  //   progress--done--big
};

// all forms
const forms = document.querySelectorAll(".register__section");

// first form
const types = document.querySelectorAll(".type__a");
const typeForm = document.querySelector(".register__section--first");

types.forEach(type => {
  // console.log({ type });

  type.addEventListener("click", () => {
    typeForm.classList.toggle("displayNone");
    typeForm.nextElementSibling.classList.toggle("displayNone");
    runProgress(0);
  });
});
// second form
const specialists = document.querySelectorAll(".specialist__a");
const specialistForm = document.querySelector(".register__section--second");

specialists.forEach(specialist => {
  // console.log({ specialist });

  specialist.addEventListener("click", () => {
    specialistForm.classList.toggle("displayNone");
    specialistForm.nextElementSibling.classList.toggle("displayNone");
    runProgress(1);
  });
});

// thirt form
const dates = document.querySelectorAll(".date__a");
const dateForm = document.querySelector(".register__section--thirt");

dates.forEach(date => {
  // console.log({ date });

  date.addEventListener("click", () => {
    dateForm.classList.toggle("displayNone");
    dateForm.nextElementSibling.classList.toggle("displayNone");
    runProgress(2);
  });
});

// fourth form
const summaryForm = document.querySelector(".register__section--fourth");

const summaryInputCategory = document.querySelector(
  ".summary__input--category"
);
const summaryInputType = document.querySelector(".summary__input--type");
const summaryInputSpecialist = document.querySelector(
  ".summary__input--specialist"
);
const summaryInputDate = document.querySelector(".summary__input--date");
const summaryInputHour = document.querySelector(".summary__input--hour");
const summaryInputName = document.querySelector(".summary__input--name");
const summaryInputPhone = document.querySelector(".summary__input--phone");

const summaryBtnCancel = document.querySelector(".summary__button--cancel");
const summaryBtnRegister = document.querySelector(".summary__button--register");

const chwiloweGuziki = document.querySelectorAll(".summary__button");

chwiloweGuziki.forEach(guzik => {
  guzik.addEventListener("click", () => {
    summaryForm.classList.toggle("displayNone");
    summaryForm.nextElementSibling.classList.toggle("displayNone");
    runProgress(3);
  });
});

// console.log({ types });

// fifth form
const detailsForm = document.querySelector(".register__section--fifth");
