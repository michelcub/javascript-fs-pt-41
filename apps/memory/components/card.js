
const card = emoji =>
{
    const newCard= document.createElement("div");
    newCard.className= "card hidden" ;
    newCard.textContent = emoji;
    function handleShowCard  ()  {
        newCard.className= "card" ;
        

    }

    newCard.addEventListener("click", handleShowCard);


    return newCard;
}
export default card;

