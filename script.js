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
  'menu.home': 'Home',
  'menu.about': 'About',
  'menu.blogs': 'Blogs',
  'menu.portfolio': 'Portfolio',
  'menu.contact': 'Contact',
  'header.welcome': 'Welcome to our Clothing Store',
};









// Translations for Portuguese
const translationsPT = {
  'menu.home': 'Início',
  'menu.about': 'Sobre',
  'menu.blogs': 'Blogs',
  'menu.portfolio': 'Portfólio',
  'menu.contact': 'Contato',
  'header.welcome': 'Bem-vindo à nossa loja de roupas',
};









// Define language switch button and flag image
const languageSwitchButton = document.getElementById('language-switch');
const flagImage = document.getElementById('flag');








const languages = {
  en: {
      flag: 'assets/uk-flag-icon.png',
      text: 'en',
  },
  pt: {
      flag: 'assets/bandeira-nacional.jpg',
      text: 'pt',
  },
};

let currentLanguage = 'pt'; // Default language is portuguese

// Function to switch the language
function switchLanguage() {
  const currentLanguage = document.documentElement.lang;
  const newLanguage = currentLanguage === 'en' ? 'pt' : 'en';


  // Update the flag image and button text
  flagImage.src = languages[currentLanguage].flag;
  languageSwitchButton.textContent = languages[currentLanguage].text;

  // Update the language attribute of the HTML tag
  document.documentElement.lang = newLanguage;

  // Get all elements with data-translation attribute
  const elementsToTranslate = document.querySelectorAll('[data-translation]');

  // Iterate through elements and update their content
  elementsToTranslate.forEach((element) => {
      const translationKey = element.getAttribute('data-translation');
      element.textContent = newLanguage === 'en' ? translationsEN[translationKey] : translationsPT[translationKey];
  });
}

// Event listener for the language switch button
document.getElementById('language-switch').addEventListener('click', switchLanguage);

// Initialize the page with the default language (PT)
switchLanguage();





// Sample data for products
const products = [
  {
    name: "T-Shirt",
    price: "$20",
    image: "assets/tshirt.jpg",
    description: "A comfortable and stylish t-shirt.",
  },
  {
    name: "Jeans",
    price: "$40",
    image: "assets/jeans.jpg",
    description: "Classic blue jeans for any occasion.",
  },
  {
    name: "Jeans",
    price: "$40",
    image: "assets/jeans.jpg",
    description: "Classic blue jeans for any occasion.",
  },
  {
    name: "T-Shirt",
    price: "$20",
    image: "assets/tshirt.jpg",
    description: "A comfortable and stylish t-shirt.",
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
