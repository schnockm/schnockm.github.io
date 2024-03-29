const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/IMG_5514.jpg") {
    myImage.setAttribute("src", "images/IMG_5743.jpg");
  } else {
    myImage.setAttribute("src", "images/IMG_5514.jpg");
  }
}

let myButton = document.querySelector("button");
let myColorButton = document.getElemenyById("changeColorButton");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = "Hello, " + myName + " nice to meet you!";
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = "Hello, " + storedName + " nice to meet you!"; 
}

function toggleFontColor() {
  const myColor = myHeading.style.color;
  if (myColor === "white") {
    myHeading.style.color = "yellow";
  } else {
    myHeading.style.color = "white";
  }
}

myButton.onclick = function() {
  setUserName();
}

myColorButton.onclick = function() { 
  toggleFontColor();
}
                    

