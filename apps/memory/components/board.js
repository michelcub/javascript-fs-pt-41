import card from "./card.js";
import { emojis } from "../utils/constants/emoji.js";


const board = () => {
    const newBoard = document.createElement("div");
    newBoard.className = "div-board";
    newBoard.append(...emojis.map(element => card(element)))

    return newBoard;
}
export default board;