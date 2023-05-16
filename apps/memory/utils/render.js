import title from "../components/title.js"

function render () {
    const myDiv = document.getElementById("app");
    myDiv.append(title("This is my title"));
}

render ()