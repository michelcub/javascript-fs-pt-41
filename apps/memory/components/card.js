const card = (emoji) => {
  const newCard = document.createElement("div");
  newCard.className = "card";
  newCard.textContent = emoji;

  const flipCard = new CustomEvent("flip", {
    bubbles: true,
    detail: { emoji },
  });

  function handleShowCard() {
    newCard.classList.add("active");
    newCard.dispatchEvent(flipCard);
  }

  newCard.addEventListener("click", handleShowCard);

  return newCard;
};
export default card;
