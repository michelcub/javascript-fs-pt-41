import card from "./card.js";
import { emojis } from "../utils/constants/emoji.js";


const board = () => {
    const newBoard = document.createElement("div");
    newBoard.className = "div-board";
    emojis.forEach(element => {
        newBoard.append(card(element));   
    });
    
    return newBoard;
}
export default board;