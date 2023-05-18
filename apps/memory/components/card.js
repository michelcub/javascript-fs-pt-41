
const card =(emoji)=>
{
    const newCard= document.createElement("div");
    newCard.className= "card";
    newCard.textContent = emoji;
    return newCard;
}
export default card;