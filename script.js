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
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
