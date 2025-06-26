const menu = document.createElement("div");

import salad from "../img/salad.jpg";
const card1 = document.createElement("div");
card1.classList.add("menu-card");
const header1 = document.createElement("h3");
header1.textContent = "Mediterranean Salad";
const paragraph1 = document.createElement("p");
paragraph1.textContent = "Lettuce, tomato, onion, black olives and cucumber with a yoghurt dressing and goat cheese";
const image1 = document.createElement("img");
image1.src = salad;

card1.appendChild(header1);
card1.appendChild(paragraph1);
card1.appendChild(image1);

import linguine from "../img/linguine.jpg";
const card2 = document.createElement("div");
card2.classList.add("menu-card");
const header2 = document.createElement("h3");
header2.textContent = "Viareggina Linguine";
const paragraph2 = document.createElement("p");
paragraph2.textContent = "Shrimp and spinach in spicy pink sauce with sprinkled goat cheese and toasted pine nuts.";
const image2 = document.createElement("img");
image2.src = linguine;

card2.appendChild(header2);
card2.appendChild(paragraph2);
card2.appendChild(image2);

import carbonara from "../img/carbonara.jpg";
const card3 = document.createElement("div");
card3.classList.add("menu-card");
const header3 = document.createElement("h3");
header3.textContent = "Carbonara Spaghetti";
const paragraph3 = document.createElement("p");
paragraph3.textContent = "A typical recipe with bacon, parmegiano regiano and organic eggs.";
const image3 = document.createElement("img");
image3.src = carbonara;

card3.appendChild(header3);
card3.appendChild(paragraph3);
card3.appendChild(image3);

import fourCheese from "../img/four_cheese.jpg";
const card4 = document.createElement("div");
card4.classList.add("menu-card");
const header4 = document.createElement("h3");
header4.textContent = "Quattro Formaggi Pizze";
const paragraph4 = document.createElement("p");
paragraph4.textContent = "With mozzarella, parmegiano, rockefort and gorgonzola cheese.";
const image4 = document.createElement("img");
image4.src = fourCheese;

card4.appendChild(header4);
card4.appendChild(paragraph4);
card4.appendChild(image4);

import margherita from "../img/margherita.jpeg"
const card5 = document.createElement("div");
card5.classList.add("menu-card");
const header5 = document.createElement("h3");
header5.textContent = "Margherita Pizze";
const paragraph5 = document.createElement("p");
paragraph5.textContent = "With mozzarella and pomodoro sauce.";
const image5 = document.createElement("img");
image5.src = margherita;

card5.appendChild(header5);
card5.appendChild(paragraph5);
card5.appendChild(image5);

import polipo from "../img/polipo.jpg";
const card6 = document.createElement("div");
card6.classList.add("menu-card");
const header6 = document.createElement("h3");
header6.textContent = "Polipo Amalfitana";
const paragraph6 = document.createElement("p");
paragraph6.textContent = "Marinated and grilled octopus served over eggplant puree, pomodoro sauce and sprinkled with goat cheese and parmegiano.";
const image6 = document.createElement("img");
image6.src = polipo;

card6.appendChild(header6);
card6.appendChild(paragraph6);
card6.appendChild(image6);

menu.appendChild(card1);
menu.appendChild(card2);
menu.appendChild(card3);
menu.appendChild(card4);
menu.appendChild(card5);
menu.appendChild(card6);

export default menu;