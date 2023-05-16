import title from "../components/title.js"
import board from "../components/board.js"

function render () {
    const myDiv = document.getElementById("app");
    myDiv.append(title("This is my title"), board());
}

export default render;