const myImage = document.querySelector("img");
const myButton = document.querySelector("button");
const myColorButton = document.getElementById("changeColorButton");
const myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Hello, " + myName + " nice to meet you!";
  }
}

function changeFontColor() {
  myHeading.style.color = "yellow";
}

function resetFontColor() {
  myHeading.style.color = "white";
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = "Hello, " + storedName + " nice to meet you!";
}

myButton.onclick = function() {
  setUserName();
}

myColorButton.onclick = function() {
  changeFontColor();
  setTimeout(resetFontColor, 2000); 
};
                    

