const fruits = ["apple", "banana", "orange", "strawberry", "blueberry", "raspberry", "grape", "watermelon", "cantaloupe", "honeydew", "pineapple", "mango", "peach", "pear", "plum", "cherry", "kiwi", "lemon", "lime", "grapefruit", "pomegranate", "coconut", "avocado", "blackberry", "cranberry", "papaya", "guava", "dragon-fruit", "passion-fruit", "lychee", "apricot", "fig", "date", "persimmon", "nectarine", "tangerine", "clementine", "kumquat", "star-fruit", "elderberry", "goji-berry", "mulberry", "plantain", "rhubarb", "durian", "jackfruit", "boysenberry", "currant", "quince", "huckleberry"];
const locations = ["hospital", "grocery-store", "pharmacy", "library", "post-office", "bank", "restaurant", "café", "bakery", "gym", "school", "university", "park", "playground", "museum", "cinema", "theater", "stadium", "airport", "train-station", "bus-stop", "gas-station", "hotel", "church", "mosque", "synagogue", "temple", "fire-station", "police-station", "courthouse", "city-hall", "shopping-mall", "department-store", "bookstore", "hardware-store", "pet-shop", "florist", "barbershop", "hair-salon", "laundromat", "dry-cleaners", "dentist", "vet-clinic", "art-gallery", "zoo", "aquarium", "beach", "forest", "campsite", "warehouse", "factory", "office-building", "apartment-complex", "community-center", "skating-rink", "bowling-alley", "swimming-pool", "parking-garage", "construction-site", "farm"]
const objects = ["table", "chair", "lamp", "television", "computer", "laptop", "smartphone", "tablet", "keyboard", "mouse", "printer", "desk", "bookshelf", "sofa", "bed", "dresser", "nightstand", "wardrobe", "mirror", "clock", "watch", "camera", "backpack", "suitcase", "umbrella", "wallet", "keys", "glasses", "pen", "pencil", "notebook", "stapler", "scissors", "tape-dispenser", "calculator", "bottle", "cup", "plate", "bowl", "fork", "spoon", "knife", "frying-pan", "pot", "toaster", "microwave", "refrigerator", "oven", "dishwasher", "vacuum-cleaner", "broom", "dustpan", "hammer", "screwdriver", "wrench", "flashlight", "battery", "ladder", "bicycle", "skateboard"];
const codingLanguages = ["GDScript","Python","Javascript","Java","Pulpscript","C#"];
const electronics = ["television", "refrigerator", "microwave", "laptop", "smartphone", "tablet", "smartwatch", "desktop-computer", "monitor", "keyboard", "mouse", "printer", "scanner", "router", "modem", "game-console", "controller", "camera", "camcorder", "speaker", "headphones", "earbuds", "amplifier", "projector", "e-reader", "toaster", "blender", "coffee-maker", "air-fryer", "dishwasher", "washing-machine", "dryer", "air-conditioner", "heater", "vacuum-cleaner", "iron", "hair-dryer", "electric-toothbrush", "shaver", "blood-pressure-monitor", "thermometer", "smoke-detector", "thermostat", "security-camera", "doorbell-camera", "power-bank", "charger", "cables", "surge-protector", "walkie-talkie"];

const categories = [fruits, locations, objects, codingLanguages, electronics];

//Picking the categorie for the round
//Round number down Math.floor()
//Picks a random number Math.random()
const pickedCategorie = categories[Math.floor(Math.random() * categories.length)];
//Picking a word from the categorie given
const pickedWord = pickedCategorie[Math.floor(Math.random() * pickedCategorie.length)];
console.log(pickedWord);

//Picking player from the range given by the user 

let numPlayers = document.getElementById("playerNumber").value;
console.log("number of players:", numPlayers);

const container = document.getElementById("cardsContainer");
//for loop for making number of cards == how many players
//then diff loop f
for (let i = 1; i <= numPlayers; i++) {
   let imposter = 

    container.appendChild(card);
}


//Getting data from html to show the imposter a hint

