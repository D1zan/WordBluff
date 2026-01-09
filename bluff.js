// Word categories
const fruits = ["apple", "banana", "orange", "strawberry"];
const locations = ["hospital", "school", "park", "airport"];
const objects = ["table", "chair", "lamp", "computer"];
const codingLanguages = ["GDScript", "Python", "Javascript", "Java"];
const electronics = ["television", "laptop", "smartphone", "tablet"];

const categories = [fruits, locations, objects, codingLanguages, electronics];

//Waits for the page to fully load
document.addEventListener("DOMContentLoaded", () => {
    //Div where everythign is
  const container = document.getElementById("cardsContainer");

  //Reads the number of players and hint choice from the window before
  //values set on index.html
  const numPlayers = window.numPlayers; 
  const hintChoice = window.hintChoice;

  //Data val for at least 2 players
  if (!numPlayers || numPlayers < 2) {
    container.innerHTML = "<p>Not Enough Players, Find Some More Friends To Play With!</p>";
  }

  // Pick random category and word
  const pickedCategory = categories[Math.floor(Math.random() * categories.length)];
  const pickedWord = pickedCategory[Math.floor(Math.random() * pickedCategory.length)];

  // Pick random imposter
  const imposterIndex = Math.floor(Math.random() * numPlayers);

  //for loop for how many players there are and making them
  for (let i = 0; i < numPlayers; i++) {
    //making the div inside the js file
    const card = document.createElement("div");
    card.className = "flip-card";

    //text on the back of the card, can't see unless its flipped
    //$ Lets you mix Strings w/ variables 
    //=== (Strictly Equal)
    const backText = i === imposterIndex
      ? `<h3>IMPOSTER</h3><p>${hintChoice === "yes" ? pickedCategory.join(", ") : "No word"}</p>`
      : `<h3>${pickedWord}</h3>`;

      //makes divs for front of card elements
      //Player () will be based on playerNum
      //
    card.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h3>Player ${i + 1}</h3> 
        </div>
        <div class="flip-card-back">
          ${backText}
        </div>
      </div>
    `;
    //adds the made div to the page 
    container.appendChild(card);
  }
});

