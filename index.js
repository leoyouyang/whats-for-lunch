let canvas = document.getElementById("preview");
let ctx = canvas.getContext("2d");
let button = document.getElementsByClassName("item");
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", buttonClicked);
}

let sandwichImg = new Image();
sandwichImg.src = "images/sandwich.png";
sandwichImg.setAttribute("crossorigin", "anonymous");
sandwichImg.onload = render;

let friesImg = new Image();
friesImg.src = "images/fries.png";
friesImg.setAttribute("crossorigin", "anonymous");
friesImg.onload = render;

let cokeImg = new Image();
cokeImg.src = "images/coke.png";
cokeImg.setAttribute("crossorigin", "anonymous");
cokeImg.onload = render;

let pizzaImg = new Image();
pizzaImg.src = "images/pizza.png";
pizzaImg.setAttribute("crossorigin", "anonymous");

let hotdogImg = new Image();
hotdogImg.src = "images/hotdog.png";
hotdogImg.setAttribute("crossorigin", "anonymous");

let donutImg = new Image();
donutImg.src = "images/donut.png";
donutImg.setAttribute("crossorigin", "anonymous");

let friesdonutImg = new Image();
friesdonutImg.src = "images/friesdonut.png";
friesdonutImg.setAttribute("crossorigin", "anonymous");

let milkshakeImg = new Image();
milkshakeImg.src = "images/milkshake.png";
milkshakeImg.setAttribute("crossorigin", "anonymous");

let smoothieImg = new Image();
smoothieImg.src = "images/smoothie.png";
smoothieImg.setAttribute("crossorigin", "anonymous");

let backgroundImg = new Image();
backgroundImg.src = "images/BG.png";
backgroundImg.setAttribute("crossorigin", "anonymous");

let entreeImg = sandwichImg,
  sideImg = friesImg,
  drinkImg = cokeImg;

function buttonClicked() {
  if (this.id === "sandwich") {
    entreeImg = sandwichImg;
    resetEntreeButtons();
    this.classList.add("selected");
  }
  if (this.id === "pizza") {
    entreeImg = pizzaImg;
    resetEntreeButtons();
    this.classList.add("selected");
  }
  if (this.id === "hotdog") {
    entreeImg = hotdogImg;
    resetEntreeButtons();
    this.classList.add("selected");
  }
  if (this.id === "fries") {
    sideImg = friesImg;
    resetSideButtons();
    this.classList.add("selected");
  }
  if (this.id === "donut") {
    sideImg = donutImg;
    resetSideButtons();
    this.classList.add("selected");
  }
  if (this.id === "friesdonut") {
    sideImg = friesdonutImg;
    resetSideButtons();
    this.classList.add("selected");
  }
  if (this.id === "coke") {
    drinkImg = cokeImg;
    resetDrinkButtons();
    this.classList.add("selected");
  }
  if (this.id === "milkshake") {
    drinkImg = milkshakeImg;
    resetDrinkButtons();
    this.classList.add("selected");
  }
  if (this.id === "smoothie") {
    drinkImg = smoothieImg;
    resetDrinkButtons();
    this.classList.add("selected");
  }
  render();
}

function render() {
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(drinkImg, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(sideImg, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(entreeImg, 0, 0, canvas.width, canvas.height);
}

function resetEntreeButtons() {
  document.getElementById("sandwich").classList.remove("selected");
  document.getElementById("pizza").classList.remove("selected");
  document.getElementById("hotdog").classList.remove("selected");
}

function resetSideButtons() {
  document.getElementById("fries").classList.remove("selected");
  document.getElementById("donut").classList.remove("selected");
  document.getElementById("friesdonut").classList.remove("selected");
}

function resetDrinkButtons() {
  document.getElementById("coke").classList.remove("selected");
  document.getElementById("milkshake").classList.remove("selected");
  document.getElementById("smoothie").classList.remove("selected");
}

let saveButton = document.getElementById("save");
saveButton.addEventListener("click", function (e) {
  let imageURL = canvas.toDataURL("image/png");
  saveButton.href = imageURL;
});

let randomButton = document.getElementById("random");
randomButton.addEventListener("click", function (e) {
  let entreeIdx = Math.floor(Math.random() * 3);
  let sideIdx = Math.floor(Math.random() * 3);
  let drinkIdx = Math.floor(Math.random() * 3);
  if (entreeIdx === 0) {
    eventFire(document.getElementById("sandwich"), "click");
  }
  if (entreeIdx === 1) {
    eventFire(document.getElementById("pizza"), "click");
  }
  if (entreeIdx === 2) {
    eventFire(document.getElementById("hotdog"), "click");
  }
  if (sideIdx === 0) {
    eventFire(document.getElementById("fries"), "click");
  }
  if (sideIdx === 1) {
    eventFire(document.getElementById("donut"), "click");
  }
  if (sideIdx === 2) {
    eventFire(document.getElementById("friesdonut"), "click");
  }
  if (drinkIdx === 0) {
    eventFire(document.getElementById("coke"), "click");
  }
  if (drinkIdx === 1) {
    eventFire(document.getElementById("milkshake"), "click");
  }
  if (drinkIdx === 2) {
    eventFire(document.getElementById("smoothie"), "click");
  }
});

function eventFire(el, etype) {
  if (el.fireEvent) {
    el.fireEvent("on" + etype);
  } else {
    var evObj = document.createEvent("Events");
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

render();
