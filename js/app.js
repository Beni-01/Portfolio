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

/*let AjaxRequest = (link, uri, funct) => {
  fetch(link + uri)
    .then((response) => response.json())
    .then(funct);
};*/

let linkApi = "http://localhost:3000/";
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

let divElement3 = document.createElement("div"),
  img = document.createElement("img"),
  h2 = document.createElement("h2"),
  p = document.createElement("p"),
  divIcons = document.createElement("div"),
  divIconItem = document.createElement("div"),
  divUnstyled1 = document.createElement("div"),
  divUnstyled2 = document.createElement("div"),
  ReactIcon = document.createElement("i"),
  ReactIcon2 = document.createElement("i");

/*
  <div class="col-sm-3 card card--set-position" >
  <img src="img/realisations/eliteMag.jpg" class="card__image" alt="">
  <h2 class=" card__title--style">EliteMag</h2>

  <p  class="card__body--text">
    ELITEMAG.NET est un média d’ELITE PRESSE. 
    Il traite les informations de tous domaines 
    de la vie sans aucune couleur, en observant 
    rigoureusement...
  </p>
  
  <div class='card__icons card__icons--style'>
    <div class='card-icons-item'>
      
      <div><i class='fa fa-heart fa-2x fa--text-red'></i> <span>500</span></div>
      <div><i class="fa fa-link fa-2x fa--text-blue"></i></div>
     </div>
  </div>

</div>*/

divElement3.classList.add("col-sm-3", "card", "card--set-position");
img.classList.add("card__image");
//img.setAttribute("alt", "");
h2.classList.add("card__title--style");
p.classList.add("card__body--text");
divIconItem.classList.add("card-icons-item");
divIcons.classList.add("card__icons", "card__icons--style");
ReactIcon.classList("fa fa-heart", "fa-2x", "fa--text-red");
ReactIcon2.classList("fa fa-link", "fa-2x", "fa--text-blue");

divUnstyled1.appendChild(ReactIcon);
divUnstyled2.appendChild(ReactIcon2);
divIconItem.appendChild(divUnstyled1);
divIconItem.appendChild(divUnstyled2);
divIcon.appendChild(divIconItem);
divElement3.appendChild(img);
divElement3.appendChild(h2);
divElement3.appendChild(p);
divElement3.appendChild(divIcon);
