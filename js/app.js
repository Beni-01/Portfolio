let btnContent = document.querySelector(".btn--comment");
let contact = document.querySelector(".contact");
let dismiss = document.querySelector("#close");
let counter = document.querySelectorAll(".fa--color+p");

let card1 = document.querySelector("#skills-card-1");
let card2 = document.querySelector("#skills-card-2");

(function dismissAndShowContactForm() {
  dismiss.style.cursor = "pointer";
  btnContent.addEventListener("click", () => {
    contact.classList.remove("d-none");
  });
  dismiss.addEventListener("click", () => {
    contact.classList.add("d-none");
  });
})();

const createElements = (icon, degree) => {
  let divCol3 = document.createElement("div");
  let divCol9 = document.createElement("div");
  let divProgress = document.createElement("div");
  let divProgressBar = document.createElement("div");
  let row = document.createElement("div");
  let iconTag = document.createElement("i");

  row.classList.add("row", "card__header");
  divCol3.classList.add("col-3");
  divCol9.classList.add("col-9", "col--progress-center");

  divProgress.classList.add("progress", "rounded-pill", "progress--background");
  divProgressBar.classList.add(
    "progress-bar",
    "progress-bar--bg-gray",
    `progress-${degree}`
  );
  if (icon == "database") iconTag.classList.add("fa", `fa-${icon}`, "fa-4x");
  else iconTag.classList.add("fab", `fa-${icon}`, "fa-4x");

  divProgressBar.innerText = degree + " %";
  divCol3.appendChild(iconTag);
  divProgress.appendChild(divProgressBar);
  divCol9.appendChild(divProgress);

  row.appendChild(divCol3);
  row.appendChild(divCol9);

  return row;
};

let AddProgressBarItem = (icon, degree, parent) => {
  let row = createElements(icon, degree);
  parent.appendChild(row);
};

let linkApi = "https://my-json-server.typicode.com/Beni-01/portfolioDB/";
fetch(linkApi + "counter")
  .then((response) => response.json())
  .then((data) => {
    counter.forEach((value, index, array) => {
      array[index].innerText = data[index];
    });
  });

fetch(linkApi + "competences")
  .then((response) => response.json())
  .then((data) => {
    const skillsCardValue1 = data.filter((value, index) => index >= 4);
    skillsCardValue1.forEach((value1) => {
      AddProgressBarItem(value1.icon, value1.degree, card2);
    });

    const skillsCardValue2 = data.filter((value, index) => index < 4);
    skillsCardValue2.forEach((value) => {
      AddProgressBarItem(value.icon, value.degree, card1);
    });
  });
