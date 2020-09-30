// Create Dino Objects
const dinos = {
    "Dinos": [
        {
            "species": "Triceratops",
            "weight": 13000,
            "height": 114,
            "diet": "Herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "First discovered in 1889 by Othniel Charles Marsh",
            "img": "triceratops.png"
        },
        {
            "species": "Tyrannosaurus Rex",
            "weight": 11905,
            "height": 144,
            "diet": "Carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "The largest known skull measures in at 5 feet long.",
            "img": "tyrannosaurus-rex.png"
        },
        {
            "species": "Anklyosaurus",
            "weight": 10500,
            "height": 55,
            "diet": "Herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Anklyosaurus survived for approximately 135 million years.",
            "img": "anklyosaurus.png"
        },
        {
            "species": "Brachiosaurus",
            "weight": 70000,
            "height": "372",
            "diet": "Herbavor",
            "where": "North America",
            "when": "Late Jurasic",
            "fact": "An asteroid was named 9954 Brachiosaurus in 1991.",
            "img": "brachiosaurus.png"
        },
        {
            "species": "Stegosaurus",
            "weight": 11600,
            "height": 79,
            "diet": "Herbavor",
            "where": "North America, Europe, Asia",
            "when": "Late Jurasic to Early Cretaceous",
            "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines.",
            "img": "stegosaurus.png"
        },
        {
            "species": "Elasmosaurus",
            "weight": 16000,
            "height": 59,
            "diet": "Carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Elasmosaurus was a marine reptile first discovered in Kansas.",
            "img": "elasmosaurus.png"
        },
        {
            "species": "Pteranodon",
            "weight": 44,
            "height": 20,
            "diet": "Carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur.",
            "img": "pteranodon.png"
        },
        {
            "species": "Pigeon",
            "weight": 0.5,
            "height": 9,
            "diet": "Herbavor",
            "where": "World Wide",
            "when": "Holocene",
            "fact": "All birds are living dinosaurs.",
            "img": "pigeon.png"
        }
    ]
}

// Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact, img) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
    this.img = img;
}

// Create Human Object
const human = new Object();


// Use IIFE to get human data from form
let humanData = (function () {
    human.img = "human.png"
    human.species = document.getElementById('name').value;
    human.feet = document.getElementById('feet').value;
    human.inches = document.getElementById('inches').value;
    human.weight = document.getElementById('weight').value;
    human.diet = document.getElementById('diet').value;
})();


// Create Dino Compare Method 1: check if weight is different
function checkWeight() {
    for (dino of dinos.Dinos) {
        if (dino.weight > human.weight) {
            dino.compare1 = dino.species + " is heavier than " + human.species
        } else {
            dino.compare1 = dino.species + " is not heavier than " + human.species
        }
    }
}
    
// Create Dino Compare Method 2: check if height is different
function checkHeight() {
    for (dino of dinos.Dinos) {
        let humanInches = Number(human.feet) * 12 + Number(human.inches)
        if (dino.height > humanInches) {
            dino.compare2 = dino.species + " is bigger than " + human.species
        } else {
            dino.compare2 = dino.species + " is not bigger than " + human.species
        }
    }
}
    
// Create Dino Compare Method 3: check if Diet is similar
function checkDiet() {
    for (dino of dinos.Dinos) {
        if (dino.diet == human.diet) {
            dino.compare3 = dino.species + " shares the same diet with " + human.species
        } else {
            dino.compare3 = dino.species + " does not share the same diet with " + human.species
        }
    }
}

// Random facts
const facts = {
    "1": "First discovered in 1889 by Othniel Charles Marsh",
    "2": "The largest known skull measures in at 5 feet long.",
    "3": "Survived for approximately 135 million years.",
    "4": "An asteroid was named 9954 in 1991.",
    "5": "Had between 17 and 22 seperate places and flat spines.",
    "6": "Was a marine reptile first discovered in Kansas.",
    "7": "Actually a flying reptile, this is not a dinosaur.",
}

    // Generate Tiles for each Dino in Array and insert in DOM
    function setupTiles(results) {
        const grid = document.getElementById('grid');
        let count = 0;
        for (result of results) {
            if (count == 4) {
                grid.insertAdjacentHTML('beforeend', gridItemHumanHTML(result));
                count = count + 1;
            } else if (count < 8) {
                let randomFact = facts[Object.keys(facts)[Math.floor(Math.random()*Object.keys(facts).length)]]
                grid.insertAdjacentHTML('beforeend', gridItemDinoHTML(result, randomFact));
                count = count + 1;
            } else {
                grid.insertAdjacentHTML('beforeend', gridItemDinoBirdHTML(result));
            }
            
        }
    }

    // Add data to tiles and return HTML
    function gridItemDinoHTML(result, fact) {
        let html = `<div class="grid-item">
                        <h3>${result.species}</h3>
                        <p>${fact}</p>
                        <img src="images/${result.img}">
                    </div>`;
        return html;
    }

    function gridItemHumanHTML(result) {
        let html = `<div class="grid-item">
                        <h3>${result.species}</h3>
                        <img src="images/${result.img}">
                    </div>`;
        return html;
    }

    function gridItemDinoBirdHTML(result) {
        let html = `<div class="grid-item">
                        <h3>${result.species}</h3>
                        <p>All birds are living dinosaurs.</p>
                        <img src="images/${result.img}">
                    </div>`;
        return html;
    }
        
    // Remove form from screen
    function removeForm() {
        const form = document.getElementById('dino-compare');
        form.style.display = "none";
    }

// On button click, prepare and display infographic
document.getElementById('btn').addEventListener('click', function(){
    // Get human data and store in object
    humanData;
    // Remove the form from the UI
    removeForm();
    // Get all results into 1 object with human in the center
    const results = dinos.Dinos.slice(0,4).concat([human]).concat(dinos.Dinos.slice(4,8))
    // Create the grid with the results
    setupTiles(results);
    // Compare method nr 1
    checkWeight();
    // Compare method nr 2
    checkHeight();
    // Compare method nr 3
    checkDiet();
});

// Create dino objects
let triceratops = new Dino(dinos.Dinos[0].species, dinos.Dinos[0].weight, dinos.Dinos[0].height, dinos.Dinos[0].diet, dinos.Dinos[0].where, dinos.Dinos[0].when, dinos.Dinos[0].fact, dinos.Dinos[0].img);
let tyrannosausRex = new Dino(dinos.Dinos[1].species, dinos.Dinos[1].weight, dinos.Dinos[1].height, dinos.Dinos[1].diet, dinos.Dinos[1].where, dinos.Dinos[1].when, dinos.Dinos[1].fact, dinos.Dinos[1].img);
let anklyosaurus = new Dino(dinos.Dinos[2].species, dinos.Dinos[2].weight, dinos.Dinos[2].height, dinos.Dinos[2].diet, dinos.Dinos[2].where, dinos.Dinos[2].when, dinos.Dinos[2].fact, dinos.Dinos[2].img);
let brachiosaurus = new Dino(dinos.Dinos[3].species, dinos.Dinos[3].weight, dinos.Dinos[3].height, dinos.Dinos[3].diet, dinos.Dinos[3].where, dinos.Dinos[3].when, dinos.Dinos[3].fact, dinos.Dinos[3].img);
let stegosaurus = new Dino(dinos.Dinos[4].species, dinos.Dinos[4].weight, dinos.Dinos[4].height, dinos.Dinos[4].diet, dinos.Dinos[4].where, dinos.Dinos[4].when, dinos.Dinos[4].fact, dinos.Dinos[4].img);
let elasmosaurus = new Dino(dinos.Dinos[5].species, dinos.Dinos[5].weight, dinos.Dinos[5].height, dinos.Dinos[5].diet, dinos.Dinos[5].where, dinos.Dinos[5].when, dinos.Dinos[5].fact, dinos.Dinos[5].img);
let pteranodon = new Dino(dinos.Dinos[6].species, dinos.Dinos[6].weight, dinos.Dinos[6].height, dinos.Dinos[6].diet, dinos.Dinos[6].where, dinos.Dinos[6].when, dinos.Dinos[6].fact, dinos.Dinos[6].img);
let pigeon = new Dino(dinos.Dinos[7].species, dinos.Dinos[7].weight, dinos.Dinos[7].height, dinos.Dinos[7].diet, dinos.Dinos[7].where, dinos.Dinos[7].when, dinos.Dinos[7].fact, dinos.Dinos[7].img);
