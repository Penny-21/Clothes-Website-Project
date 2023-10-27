
const backToTopLink = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    backToTopLink.style.display = "block";
  } else {
    backToTopLink.style.display = "none";
  }
});

backToTopLink.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Translations for English
const translationsEN = {
  "menu.home": "Home",
  "menu.about": "About",
  "menu.blogs": "Blogs",
  "menu.portfolio": "Portfolio",
  "menu.contact": "Contact",
  "header.welcome": "Welcome to our Clothing Store",
};

// Translations for Portuguese
const translationsPT = {
  "menu.home": "Início",
  "menu.about": "Sobre",
  "menu.blogs": "Blogs",
  "menu.portfolio": "Portfólio",
  "menu.contact": "Contato",
  "header.welcome": "Bem-vindo à nossa loja de roupas",
};

// Define language switch button and flag image
const languageSwitchButton = document.getElementById("language-switch");
const flagImage = document.getElementById("flag");

const languages = {
  en: {
    flag: "assets/uk-flag-icon.png",
    text: "PT",
  },
  pt: {
    flag: "assets/bandeira-nacional.jpg",
    text: "EN",
  },
};

let currentLanguage = "pt"; // Default language is portuguese

// Function to switch the language
function switchLanguage() {
  const currentLanguage = document.documentElement.lang;
  const newLanguage = currentLanguage === "en" ? "pt" : "en";

  // Update the flag image and button text
  flagImage.src = languages[currentLanguage].flag;
  languageSwitchButton.textContent = languages[currentLanguage].text;

  // Update the language attribute of the HTML tag
  document.documentElement.lang = newLanguage;

  // Get all elements with data-translation attribute
  const elementsToTranslate = document.querySelectorAll("[data-translation]");

  // Iterate through elements and update their content
  elementsToTranslate.forEach((element) => {
    const translationKey = element.getAttribute("data-translation");
    element.textContent =
      newLanguage === "en"
        ? translationsEN[translationKey]
        : translationsPT[translationKey];
  });
}

// Event listener for the language switch button
document
  .getElementById("language-switch")
  .addEventListener("click", switchLanguage);

// Initialize the page with the default language (PT)
switchLanguage();

// Sample data for products
const products = [
  {
    name: "Dress",
    price: "$50",
    image: "assets/Giuly-1.png",
    description:
      "Vento vem me trazer boas novas! E a novidade dessa coleção da ogue é esse chemise com essa estamapa linda de animal print!! já garante a sua, porque são poucas peças hein.",
  },
  {
    name: "Body-Dress",
    price: "$40",
    image: "assets/Body-Dress-2.png",
    description:
      "Vermelho significa paixão, energia e excitação. É uma cor quente. É a cor do elemento fogo, do sangue e do coração humano. Simboliza a chama que mantém vivo o desejo, a excitação sexual e representa os sentimentos de amor e paixão.",
  },
  {
    name: "Dress",
    price: "$40",
    image: "assets/Black-dress.png",
    description: "O nosso Vestido Moletim é a peça que não pode faltar na sua casa para você curtir os fins de semana de uma forma mais leve e cheia de elegância!",
  },
  {
    name: "T-Shirt",
    price: "$20",
    image: "assets/Giorgio-brasiliano.png",
    description:
      "Com recorte na lateral e com tecido de Moletim, o nosso Camisão assimétrico é a peça perfeita para essa época do ano, te proporcionando elegância e um conforto incrível para tirar aquela foto em família!",
  },
  // Add more products here
];

// Function to create product cards
function createProductCard(product) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const image = document.createElement("img");
  image.src = product.image;

  const name = document.createElement("h2");
  name.textContent = product.name;

  const price = document.createElement("p");
  price.textContent = `Price: ${product.price}`;

  const description = document.createElement("p");
  description.textContent = product.description;

  //Add a click event listener to each product card
  productCard.addEventListener("click", () => {
    alert(`Clicked on ${product.name}`);
  });

  productCard.appendChild(image);
  productCard.appendChild(name);
  productCard.appendChild(price);
  productCard.appendChild(description);

  return productCard;
}

// Add product cards to the page
const productsSection = document.getElementById("products");
products.forEach((product) => {
  const productCard = createProductCard(product);
  productsSection.appendChild(productCard);
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}







// Array of background colors to cycle through
const colors = ['#f0f0f0', '#ffcc66', '#66ccff', '#99ff99', '#ff6666', '#ccccff'];

// Function to change the background color
function changeBackgroundColor() {
    // Get the body element
    const body = document.body;

    // Get the current background color
    const currentColor = body.style.backgroundColor;

    // Find the index of the current color in the array
    const currentIndex = colors.indexOf(currentColor);

    // Calculate the index of the next color
    const nextIndex = (currentIndex + 1) % colors.length;

    // Set the next background color
    body.style.backgroundColor = colors[nextIndex];
}

// Set an interval to change the background color automatically every 3 seconds (3000 milliseconds)
setInterval(changeBackgroundColor, 3000);

