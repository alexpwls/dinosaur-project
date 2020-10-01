const dinos = {
    "Dinos": [{
        "species": "Triceratops",
        "weight": 13000,
        "height": 114,
        "diet": "Herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact0": "First discovered in 1889 by Othniel Charles Marsh",
        "img": "triceratops.png"
    }, {
        "species": "Tyrannosaurus Rex",
        "weight": 11905,
        "height": 144,
        "diet": "Carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact0": "The largest known skull measures in at 5 feet long.",
        "img": "tyrannosaurus-rex.png"
    }, {
        "species": "Anklyosaurus",
        "weight": 10500,
        "height": 55,
        "diet": "Herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact0": "Anklyosaurus survived for approximately 135 million years.",
        "img": "anklyosaurus.png"
    }, {
        "species": "Brachiosaurus",
        "weight": 70000,
        "height": "372",
        "diet": "Herbavor",
        "where": "North America",
        "when": "Late Jurasic",
        "fact0": "An asteroid was named 9954 Brachiosaurus in 1991.",
        "img": "brachiosaurus.png"
    }, {
        "species": "Stegosaurus",
        "weight": 11600,
        "height": 79,
        "diet": "Herbavor",
        "where": "North America, Europe, Asia",
        "when": "Late Jurasic to Early Cretaceous",
        "fact0": "The Stegosaurus had between 17 and 22 seperate places and flat spines.",
        "img": "stegosaurus.png"
    }, {
        "species": "Elasmosaurus",
        "weight": 16000,
        "height": 59,
        "diet": "Carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact0": "Elasmosaurus was a marine reptile first discovered in Kansas.",
        "img": "elasmosaurus.png"
    }, {
        "species": "Pteranodon",
        "weight": 44,
        "height": 20,
        "diet": "Carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact0": "Actually a flying reptile, the Pteranodon is not a dinosaur.",
        "img": "pteranodon.png"
    }, {
        "species": "Pigeon",
        "weight": 0.5,
        "height": 9,
        "diet": "Herbavor",
        "where": "World Wide",
        "when": "Holocene",
        "fact0": "All birds are living dinosaurs.",
        "img": "pigeon.png"
    }]
}

/**
* @description Represents a dinosaur
* @constructor
* @param {string} species - The species of the dino
* @param {string} weight - The weight of the dino
* @param {string} height - The height of the dino
* @param {string} diet - The diet oof the dino
* @param {string} where - Where the dino lived
* @param {string} when - When the dino lived
* @param {string} fact0 - Fact about the dino
* @param {string} img - Image from the dino
*/
function Dino(species, weight, height, diet, where, when, fact0, img) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact0 = fact0;
    this.img = img;
}

/**
* @description Create Dino Compare Method 1: check if weight is different
*/
function checkWeight(results, humanObject) {
    for (result of results) {
        if (result.weight > humanObject.weight) {
            result.fact1 = result.species + " is heavier than " + humanObject.species
        } else {
            result.fact1 = result.species + " is not heavier than " + humanObject.species
        }
    }
}

/**
* @description Create Dino Compare Method 2: check if height is different
*/
function checkHeight(results, humanObject) {
    for (result of results) {
        let humanInches = Number(humanObject.feet) * 12 + Number(humanObject.inches)
        if (result.height > humanInches) {
            result.fact2 = result.species + " is bigger than " + humanObject.species
        } else {
            result.fact2 = result.species + " is not bigger than " + humanObject.species
        }
    }
}

/**
* @description Create Dino Compare Method 3: check if Diet is similar
*/
function checkDiet(results, humanObject) {
    for (result of results) {
        if (result.diet == humanObject.diet) {
            result.fact3 = result.species + " shares the same diet with " + humanObject.species
        } else {
            result.fact3 = result.species + " does not share the same diet with " + humanObject.species
        }
    }
}

/**
* @description Add data to tiles and return HTML
*/
function gridItemDinoHTML(result, randomNumber) {
    let fact = ""
    if (result.species == "Pigeon") {
        fact = "All birds are living dinosaurs."
    } else if (randomNumber == 0) {
        fact = result.fact0
    } else if (randomNumber == 1) {
        fact = result.fact1
    } else if (randomNumber == 2) {
        fact = result.fact2
    } else {
        fact = result.fact3
    }
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

/**
* @description Generate Tiles for each Dino and Human in results array and inserts in DOM
*/
function setupTiles(results) {
    const grid = document.getElementById("grid");
    let count = 0;
    for (result of results) {
        if (count == 4) {
            grid.insertAdjacentHTML("beforeend", gridItemHumanHTML(result));
            count = count + 1;
        } else {
            let randomNumber = Math.floor(Math.random() * 4);
            grid.insertAdjacentHTML("beforeend", gridItemDinoHTML(result, randomNumber));
            count = count + 1;
        }
    }
}


/**
* @description Remove form from screen
*/
function removeForm() {
    const form = document.getElementById("dino-compare");
    form.style.display = "none";
}

/**
* On button click, prepare and display infographic
*/
document.getElementById("btn").addEventListener("click", function() {
    /**
    * @description Use IIFE to get human data from form
    */
    let humanObject = {};
    (function(human) {
            human.img = "human.png"
            human.species = document.getElementById("name").value;
            human.feet = document.getElementById("feet").value;
            human.inches = document.getElementById("inches").value;
            human.weight = document.getElementById("weight").value;
            human.diet = document.getElementById("diet").value;
    })(humanObject);
    removeForm();
    /**
    * @description Gather all dino and human data in single array
    */
    let results = dinos.Dinos.map(dino => new Dino(dino.species, dino.weight, dino.height, dino.diet, dino.where, dino.when, dino.fact0, dino.img));
    results.splice(4, 0, humanObject);
    /**
    * @description Checks for comparisons between human and dino and creates additional facts about the dinos
    */
    checkWeight(results, humanObject);
    checkHeight(results, humanObject);
    checkDiet(results, humanObject);
    setupTiles(results);
});
