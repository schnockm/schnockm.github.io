const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/IMG_5514.jpg") {
    myImage.setAttribute("src", "images/IMG_5743.jpg");
  } else {
    myImage.setAttribute("src", "images/IMG_5514.jpg");
  }
}

const myButton = document.querySelector("button");
const myColorButton = document.getElementById("changeColorButton");
const myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (myName) {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Hello, " + myName + " nice to meet you!";
  }
}
myColorButton.onclick = () +> {
  const myColor = myHeading.style.color
  if (myColor === "white") {
    myColor === "yellow");
  } else {
  myColor === "white";
  }
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


                    

