import card from "./card.js";
import { emojis } from "../utils/constants/emoji.js";

const board = () => {
  const newBoard = document.createElement("div");
  newBoard.className = "div-board";
  newBoard.append(...emojis.map((emoji) => card(emoji)));
  newBoard.append(...emojis.map((emoji) => card(emoji)));

  let lastEmoji = null;

  newBoard.addEventListener("flip", (event) => {
    if (lastEmoji === null) {
      lastEmoji = event.detail.emoji;
      return;
    }

    const isEqual = lastEmoji === event.detail.emoji;
    if (isEqual) {
      const activeCards = document.querySelectorAll(".active");
      activeCards.forEach((card) => {
        card.remove();
      });
    }

    lastEmoji = null;
  });
  return newBoard;
};
export default board;
