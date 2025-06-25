const homeTab = document.createElement("div");

homeTab.classList.add("home-tab");

const homeText = document.createElement("div");
homeText.classList.add("home-text");

const paragraph1 = document.createElement("p");
const paragraph2 = document.createElement("p");

paragraph1.textContent = "Join us to try the best traditional, gourmet italian food, with multiple locations in your city.";
paragraph2.textContent = "You won't regret it!";

homeText.append(paragraph1);
homeText.append(paragraph2);

const homeImage = document.createElement("img");
import imageSource from "../img/pizza.png";
homeImage.src = imageSource;
homeImage.classList.add("home-image");

homeTab.append(homeText);
homeTab.append(homeImage);

export default homeTab;