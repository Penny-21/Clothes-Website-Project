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
  "menu.contact": "Contact",
  "header.welcome": "Welcome to our Clothing Store",
  "header.about": "About Us",
};

// Translations for Portuguese
const translationsPT = {
  "menu.home": "Início",
  "menu.about": "Sobre",
  "menu.blogs": "Blogs",
  "menu.contact": "Contato",
  "header.welcome": "Bem-vindo à nossa loja de roupas",
  "header.about": "Quem Somos",
};

// Define language switch button and flag image
const languageSwitchButton = document.getElementById("language-switch");
const flagImage = document.getElementById("flag");

const languages = {
  en: {
    flag: "/assets/uk-flag-icon.png",
    text: "PT",
  },
  pt: {
    flag: "/assets/bandeira-nacional.jpg",
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