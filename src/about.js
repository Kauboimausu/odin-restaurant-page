const about = document.createElement("div");
about.classList.add("about");

const description = document.createElement("div");
description.classList.add("description");

const header = document.createElement("h3");
header.textContent = "Welcome to Gianni's";

const paragraph1 = document.createElement("p");
paragraph1.textContent = "This restaurant was founded by a first generation Italian immigrant in 1963. Our menu consists of traditional family recipes as well as some more modern additions and some more local dish variations.";

const paragraph2 = document.createElement("p");
paragraph2.textContent = "We believe in spreading the joy of delicious authentic Italian cuisine using gourmet ingredients while keeping our prices as affordable as possible. ";

const paragraph3 = document.createElement("p");
paragraph3.textContent = "Over the years we've managed to open 3 locations in your city, and we'd love to have you at any of them. For reservations you can contact us through the phone number provided. We're also available through Uber Eats!"


description.appendChild(header);
description.appendChild(paragraph1);
description.appendChild(paragraph2);
description.appendChild(paragraph3);

import fakeMap from "../img/map.jpg";
const map = document.createElement("img");
map.src = fakeMap;
map.alt = "Fake Map";

about.appendChild(description);
about.appendChild(map);

export default about;