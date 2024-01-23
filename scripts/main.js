const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/babyalligator.JPG") {
    myImage.setAttribute("src", "images/babyalligator2.png");
  } else {
    myImage.setAttribute("src", "images/babyalligator.JPG");
  }
}

let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1")

function setUserName() {
    let myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Baby alligators are cool, ${myName}`;
    }
  }

if (!localstorage.getItem("name")) {
    setUserName();
} else {
  let storedName= localStorage.getItem("name");
  myHeading.innerHTML = 'Baby alligators are cool, ${storedName}';
}

myButton.onclick = function() {
    setUserName();
  }
