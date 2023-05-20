import card from "./card.js";
import { emojis } from "../utils/constants/emoji.js";


const board = () => {
    const newBoard = document.createElement("div");
    newBoard.className = "div-board";
    newBoard.append(...emojis.map(emoji => card(emoji)))
    newBoard.append(...emojis.map(emoji => card(emoji)))

    return newBoard;
}
export default board;