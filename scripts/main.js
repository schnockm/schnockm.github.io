const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/babyalligator.JC:\Users\schno\schnockm.github.io\images\babyalligator.JPG") {
    myImage.setAttribute("src", "C:\Users\schno\schnockm.github.io\images\babyalligator2.png");
  } else {
    myImage.setAttribute("src", "images/babyalligator.JPG");
  }
};

let myButton = document.querySelector("button")
myButton.onclick = () => {
    setUserName();
  };
let myHeading = document.querySelector("h1")

function setUserName() {
    const myName = prompt("Please enter your name.");
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
    const storedName= localStorage.getItem("name");
    myHeading.textContent = 'Baby alligators are cool, ${storedName}';
}
