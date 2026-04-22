
// An array of objects. Each object is one car with 4 properties.
var cars = [
  { name: "Cabriolet", type: "Cars", make: "Ford", images: ["cabriolet1.jpg"] },
  { name: "Beetle", type: "Cars", make: "VW", images: ["beetle.jpg"] },
  { name: "3 Series", type: "Cars", make:"BMW", images: ["3series.jpg"] },
  { name: "C-Class", type: "Cars", make: "Benz", images: ["cclass.jpg"] },
  { name: "A4", type: "Cars", make: "Audi", images: ["a4.jpg"] },
  { name: "Corolla", type: "Cars", make: "Toyota", images: ["corolla.jpg"] },
];


// The make names
var makes = ["VW", "BMW", "Benz", "Audi", "Ford", "Toyota"];


// Track the current car 
var currentCar;


window.onload = function () {
  // I Fill the dropdown with make names
  var dropdown = document.getElementById("make-list");

  // Loop through each make name (VW, BMW, Benz ...)

  for (var i = 0; i < makes.length; i++) {

    

    var option = document.createElement("option");
   
   
    // Sets the value attribute
    option.value = makes[i];
    


    option.textContent = makes[i];
    
    // Adds the option into the dropdown on the actual page.
    dropdown.appendChild(option);
  

  }

  // Pick the first random car and show it
  loadRandomCar();


  document.getElementById("guess-btn").onclick = processGuess;

};

// Picks a random car and displays it on the page.
function loadRandomCar() {
  var randomIndex = Math.floor(Math.random() * cars.length);
 

  currentCar = cars[randomIndex];
  
  document.getElementById("car-name").textContent = currentCar.name;


  document.getElementById("car-type").textContent = currentCar.type;


  var img = document.getElementById("car-img");

  // Sets the image source to the car's image file.
  // [0] because images is an array, we use the first image.
  img.src = currentCar.images[0];

  

  img.classList.remove("hidden");


  document.getElementById("guess-btn").classList.remove("disabled");

}


// Runs when the user clicks Guess!
function processGuess() {
  document.getElementById("guess-btn").classList.add("disabled");
  

  var selectedMake = document.getElementById("make-list").value;

  
  

  if (selectedMake === currentCar.make) {
   

    var count = document.getElementById("correct");
     // parseInt converts the text "0" into the number 0, then adds 1.
    count.textContent = parseInt(count.textContent) + 1;
   
 
  }

  var total = document.getElementById("total");
  total.textContent = parseInt(total.textContent) + 1;


  loadRandomCar();
  // Loads a new random car after each guess.
}
