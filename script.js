const carousel = document.querySelector(".carousel");
const cards = document.querySelectorAll(".card");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const indicatorsContainer = document.querySelector(".carousel-indicators");

let currentIndex = 0;
const totalCards = cards.length;

// Crear indicadores
for (let i = 0; i < totalCards; i++) {
  const indicator = document.createElement("div");
  indicator.classList.add("indicator");
  if (i === 0) indicator.classList.add("active");
  indicator.addEventListener("click", () => {
    currentIndex = i;
    updateCarousel();
  });
  indicatorsContainer.appendChild(indicator);
}

function updateCarousel() {
  cards.forEach((card, index) => {
    if (index === currentIndex) {
      card.style.display = "block";
      card.classList.remove("flipped");
    } else {
      card.style.display = "none";
    }
  });

  // Actualizar indicadores
  document.querySelectorAll(".indicator").forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentIndex);
  });
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalCards) % totalCards;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalCards;
  updateCarousel();
});

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

updateCarousel();
