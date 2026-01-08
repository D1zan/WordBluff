const fruits = ["apple", "banana", "orange", "strawberry"];
const locations = ["hospital", "school", "park", "airport"];
const objects = ["table", "chair", "lamp", "computer"];
const codingLanguages = ["GDScript","Python","Javascript","Java"];
const electronics = ["television", "laptop", "smartphone", "tablet"];

const categories = [fruits, locations, objects, codingLanguages, electronics];

// Pick category and word for the round
const pickedCategory = categories[Math.floor(Math.random() * categories.length)];
const pickedWord = pickedCategory[Math.floor(Math.random() * pickedCategory.length)];

// Read player number from previous page using URL param
const urlParams = new URLSearchParams(window.location.search);
const numPlayers = parseInt(urlParams.get("players")) || 4; // default 4

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("cardsContainer");
    //picks a random number from the range of players to be imposter
    const imposterIndex = Math.floor(Math.random() * numPlayers);

    for (let i = 0; i < numPlayers; i++) {
        const card = document.createElement("div");
        card.className = "flip-card";
        //creating cards using the amount of players there are
        //i+1 just means that on the card the numbers shown will go "Player 1" - "Player 2" and so on
        card.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <h3>Player ${i+1}</h3> 
                    
                </div>
                <div class="flip-card-back">
                    ${
                        i === imposterIndex
                        ? `<h3>IMPOSTER</h3><p>No word</p>`
                        : `<h3>${pickedWord}</h3>`
                    }
                </div>
            </div>
        `;
        container.appendChild(card);
    }
});