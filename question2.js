window.onload = function() {

  document.getElementById("blend-btn").onclick = blendNow;
  
};

function blendNow() {

  // Clear the output box first
  var outputDiv = document.getElementById("output");


  //  Read what the user typed in the surname box
  var surname = document.getElementById("surname").value;
  // .value reads the text currently typed in the input box.
  
  //  Read which font was chosen
  var chosenFont = document.getElementById("font").value;
 
  var chosenColor = document.getElementById("color").value;

  var chosenSize = document.getElementById("fontsize").value;

  var position = "seq"; // default to sequential
  if (document.getElementById("random").checked)  { position = "rand"; }
  if (document.getElementById("reverse").checked) { position = "rev";  }

  for (var i = 0; i < surname.length; i++) {
  
    var letterSpan = document.createElement("span");


    letterSpan.textContent = surname[i];
  

   
    letterSpan.style.fontFamily = chosenFont;
    letterSpan.style.color      = chosenColor;
    letterSpan.style.fontSize   = chosenSize + "px";
   

    letterSpan.style.position = "absolute";


    //  Calculate x and y based on chosen position mode
    var x, y;

    if (position === "seq") {
      
      x = 15 + (i * 15);
      y = 15 + (i * 15);

    } else if (position === "rev") {

      var reverseIndex = surname.length - 1 - i;
      x = 15 + (reverseIndex * 15);
      y = 15 + (reverseIndex * 15);

    }
    else {
    
      x = Math.floor(Math.random() * 300);
      y = Math.floor(Math.random() * 100);
   
    }

    letterSpan.style.left = x + "px";
    letterSpan.style.top  = y + "px";
   
    outputDiv.appendChild(letterSpan);

  }
}