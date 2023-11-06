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
  "h.about": "Who we are",
  "p.about": "GUE is an Afro-Brazilian Fashion brand, which arose from a need to present an Afro fashion without being caricatured, that is, without using African fabrics and prints with imagery of black women in turbans. We believe that afro fashion goes far beyond that. Our main values are: to make a democratic fashion, which dresses everyone, that's why we currently serve the grid from PP to G4, but by making it custom, we make pieces for all bodies and genders that want to purchase our products. In addition, because we are a brand with value religious, as well as collections focused on matrix religions Africans, we also work with the color white all year round.",
  "h.story": "Our Story",
  "p.story": "Afro-entrepreneur and stylist of the brand O GUE, graduated in Design from Faculdade Senai Cetiqt, Thársila Tostes (@tharsila_rt) 29 years old, started her brand O GUE in 2015. GUE was born with the purpose of making an Afro-Brazilian and agenera fashion, respecting and exalting diversity, through collections that tell about Afro culture, bringing ancestral knowledge, rescuing black history. Over the years, the brand has gone through a break, due to the maternity of its creator, and in 2020 During the pandemic, it returns to the market. Currently with a new visual identity, and launching the new Aye collection, O GUE invites all clients and friends to meet our stylist and your new collection!",
};

// Translations for Portuguese
const translationsPT = {
  "menu.home": "Início",
  "menu.about": "Sobre",
  "menu.blogs": "Blogs",
  "menu.contact": "Contato",
  "header.welcome": "Bem-vindo à nossa loja de roupas",
  "h.about": "Quem somos",
  "p.about": "A O GUE é uma marca de Moda Afro-Brasileira, que surgiu de uma necessidade de apresentar uma moda afro sem ser caricata, ou seja sem utilizar tecidos africanos e estampas com imagético de mulheres negras de turbantes. Acreditamos que moda afro, vai muito além disso. Nossos principais valores são: fazer uma moda democrática, que vista a todos, por isso, atualmente atendemos a grade do PP ao G4, mas por fazer sob medida, fazemos peças para todos os corpos e gêneros que queiram adquirir nossos produtos. Além disso, por sermos uma marca com valor religioso, além de coleções voltadas para religiões de matrizes africanas, também trabalhamos a cor branca o ano inteiro.",
  "h.story": "Nossa história",
  "p.story": "Afroempreendedora e estilista da marca O GUE, formada em Design pela Faculdade Senai Cetiqt, Thársila Tostes (@tharsila_rt) de 29 anos, iniciou a sua marca O GUE em 2015. O GUE nasceu com o propósito de fazer uma moda afro brasileira e agenera, respeitando e exaltando a diversidade, através de coleções que contam sobre a cultura afro, trazendo saberes ancestrais, resgatando a história negra. Ao longo desses anos, a marca passou por uma pausa, devido a maternidade de sua criadora, e em 2020 durante a pandemia, retorna ao mercado. Atualmente com uma nova identidade visual, e lançando a nova coleção Aye, a O GUE convida a todos os clientes e amigos a conhecerem a nossa estilista e sua nova coleção!"
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
    nome: "Vestir",
    preço: "$50",
    Tamanho: "PP-P-M-G-2G-3G-4G",
    imaagem: "assets/Giuly-1.png",
    descescao:
      "Vento vem me trazer boas novas! E a novidade dessa coleção da ogue é esse chemise com essa estamapa linda de animal print!! já garante a sua, porque são poucas peças hein.",
  },
  {
    name: "Túnica",
    preço: "$40",
    Tamanho: "PP-P-M-G-2G-3G-4G",
    imaagem: "assets/Body-Dress-2.png",
    descescao:
      "Vermelho significa paixão, energia e excitação. É uma cor quente. É a cor do elemento fogo, do sangue e do coração humano. Simboliza a chama que mantém vivo o desejo, a excitação sexual e representa os sentimentos de amor e paixão.",
  },
  {
    nome: "Vestir",
    preço: "$40",
    Tamanho: "PP-P-M-G-2G-3G-4G",
    imaagem: "assets/Black-dress.png",
    descescao:
      "O nosso Vestido Moletim é a peça que não pode faltar na sua casa para você curtir os fins de semana de uma forma mais leve e cheia de elegância!",
  },
  {
    nome: "Camiseta",
    preço: "$20",
    Tamanho: "PP-P-M-G-2G-3G-4G",
    imaagem: "assets/Giorgio-brasiliano.png",
    descescao:
      "Com recorte na lateral e com tecido de Moletim, o nosso Camisão assimétrico é a peça perfeita para essa época do ano, te proporcionando elegância e um conforto incrível para tirar aquela foto em família!",
  },
  // Add more products here
];

// Function to create product cards
function createProductCard(product) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const imaagem = document.createElement("img");
  imaagem.src = product.imaagem;

  const nome = document.createElement("h2");
  nome.textContent = product.nome;

  const preço = document.createElement("p");
  preço.textContent = `preço: ${product.preço}`;

  const Tamanho = document.createElement("p");
  Tamanho.textContent = product.Tamanho;

  const descescao = document.createElement("p");
  descescao.textContent = product.descescao;

  //Add a click event listener to each product card
  productCard.addEventListener("click", () => {
    alert(`Clicked on ${product.nome}`);
  });

  productCard.appendChild(imaagem);
  productCard.appendChild(nome);
  productCard.appendChild(preço);
  productCard.appendChild(Tamanho);
  productCard.appendChild(descescao);

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
const colors = [
  "#f0f0f0",
  "#ffcc66",
  "#66ccff",
  "#99ff99",
  "#ff6666",
  "#ccccff",
];

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
