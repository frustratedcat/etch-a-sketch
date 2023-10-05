"use strict";

const btnSizeContainer = document.querySelector(".btn-size-container");
let btnBoardSize = document.querySelectorAll(".btn-board-size");
const btn16 = document.querySelector(".btn-16");
const btn32 = document.querySelector(".btn-32");
const btn48 = document.querySelector(".btn-48");
const clearBoard = document.querySelector(".clear-board");

const gameContainer = document.querySelector(".game-container");
let gameContainerAll = document.querySelectorAll(".game-contianer");

const clickHoverContainer = document.querySelector(".click-hover-container");
let btnDraw = document.querySelectorAll(".btn-draw");
const drawOnClick = document.querySelector(".draw-on-click");
const drawOnHover = document.querySelector(".draw-on-hover");
const erase = document.querySelector(".erase");

const colorContainer = document.querySelector(".color-container");
let color = document.querySelectorAll(".color");
const blackWhiteColor = document.querySelector(".black-white-color");
const randomColor = document.querySelector(".random-color");

let drawOnClickButtonClicked = false;
let drawOnHoverButtonClicked = false;
let eraseOnClickButtonClicked = false;
let numberOfSquares;
let changeColor;
let randomColorShow = false;
let blackWhiteShow = false;
let svgShow = false;
let innerColorChoiceFinal = false;
let outerChoice;
let innerChoice;
let innerChosenColor;

const svgContainer = document.querySelector(".svg-container");
const outerColorChoiceAll = document.querySelector(".outer-color-choice");
let outerColorChoice = document.querySelectorAll(".outer-color-choice");
const choiceGray = document.getElementById("choice-gray");
const choiceBrown = document.getElementById("choice-brown");
const choiceOrange = document.getElementById("choice-orange");
const choiceYellow = document.getElementById("choice-yellow");
const choiceLime = document.getElementById("choice-lime");
const choiceGreen = document.getElementById("choice-green");
const choiceTeal = document.getElementById("choice-teal");
const choiceCyan = document.getElementById("choice-cyan");
const choiceBlue = document.getElementById("choice-blue");
const choiceIndigo = document.getElementById("choice-indigo");
const choiceViolet = document.getElementById("choice-violet");
const choiceGrape = document.getElementById("choice-grape");
const choicePink = document.getElementById("choice-pink");
const choiceRed = document.getElementById("choice-red");

const svgColorIndividuals = document.querySelector(".svg-color-individuals");
let colorful = document.querySelectorAll(".colorful");
const colorSVG = document.querySelector(".color-svg");
const colorFill1 = document.querySelector(".color-fill-1");
const colorFill2 = document.querySelector(".color-fill-2");
const colorFill3 = document.querySelector(".color-fill-3");
const colorFill4 = document.querySelector(".color-fill-4");
const colorFill5 = document.querySelector(".color-fill-5");
const colorFill6 = document.querySelector(".color-fill-6");
const colorFill7 = document.querySelector(".color-fill-7");
const colorFill8 = document.querySelector(".color-fill-8");
const colorFill9 = document.querySelector(".color-fill-9");
const colorFill10 = document.querySelector(".color-fill-10");

const createGrid16 = function () {
  for (let i = 0; i < 16 * 16; i++) {
    const squares = document.createElement("div");
    squares.classList.add("squares");
    squares.classList.add("squares-16");
    gameContainer.appendChild(squares);
  }
};

const createGrid32 = function () {
  for (let i = 0; i < 32 * 32; i++) {
    const squares = document.createElement("div");
    squares.classList.add("squares");
    squares.classList.add("squares-32");
    gameContainer.appendChild(squares);
  }
};

const createGrid48 = function () {
  for (let i = 0; i < 48 * 48; i++) {
    const squares = document.createElement("div");
    squares.classList.add("squares");
    squares.classList.add("squares-48");
    gameContainer.appendChild(squares);
  }
};

const createGrid = function () {
  for (let i = 0; i < btnBoardSize.length; i++) {
    btnBoardSize[i].addEventListener("click", (e) => {
      if (e.target.matches(".btn-16")) {
        removeGameContainerChildren();
        createGrid16();
        numberOfSquares = 16;
      } else if (e.target.matches(".btn-32")) {
        removeGameContainerChildren();
        createGrid32();
        numberOfSquares = 32;
      } else if (e.target.matches(".btn-48")) {
        removeGameContainerChildren();
        createGrid48();
        numberOfSquares = 48;
      } else if (e.target.matches(".clear-board")) {
        removeGameContainerChildren();
        numberOfSquares = 0;
      }
    });
  }
};

function removeGameContainerChildren() {
  if (gameContainer.hasChildNodes()) {
    while (gameContainer.firstChild) {
      gameContainer.removeChild(gameContainer.firstChild);
    }
  }
}

const drawCreationOnClick = function () {
  chooseColor();
  gameContainer.addEventListener("click", (e) => {
    if (e.target.matches(".squares")) {
      changeColor = e.target;

      if (numberOfSquares === 16 && drawOnClickButtonClicked === true) {
        changeColor.classList.add("change-color-click");
        if (
          randomColorShow === true ||
          blackWhiteShow === true ||
          svgShow === true
        ) {
          shownColor();
        }
        changeColor.classList.remove("change-color-hover");
        changeColor.classList.remove("erase-color");
      } else if (numberOfSquares === 32 && drawOnClickButtonClicked === true) {
        changeColor.classList.add("change-color-click");
        if (
          randomColorShow === true ||
          blackWhiteShow === true ||
          svgShow === true
        ) {
          shownColor();
        }
        changeColor.classList.remove("change-color-hover");
        changeColor.classList.remove("erase-color");
      } else if (numberOfSquares === 48 && drawOnClickButtonClicked === true) {
        changeColor.classList.add("change-color-click");
        if (
          randomColorShow === true ||
          blackWhiteShow === true ||
          svgShow === true
        ) {
          shownColor();
        }
        changeColor.classList.remove("change-color-hover");
        changeColor.classList.remove("erase-color");
      }
    }
  });
};

const drawCreationOnHover = function () {
  chooseColor();
  gameContainer.addEventListener("mouseover", (e) => {
    if (e.target.matches(".squares")) {
      changeColor = e.target;

      if (numberOfSquares === 16 && drawOnHoverButtonClicked === true) {
        changeColor.classList.add("change-color-hover");
        if (
          randomColorShow === true ||
          blackWhiteShow === true ||
          svgShow === true
        ) {
          shownColor();
        }
        changeColor.classList.remove("change-color-click");
        changeColor.classList.remove("erase-color");
      } else if (numberOfSquares === 32 && drawOnHoverButtonClicked === true) {
        changeColor.classList.add("change-color-hover");
        if (
          randomColorShow === true ||
          blackWhiteShow === true ||
          svgShow === true
        ) {
          shownColor();
        }
        changeColor.classList.remove("change-color-click");
        changeColor.classList.remove("erase-color");
      } else if (numberOfSquares === 48 && drawOnHoverButtonClicked === true) {
        changeColor.classList.add("change-color-hover");
        if (
          randomColorShow === true ||
          blackWhiteShow === true ||
          svgShow === true
        ) {
          shownColor();
        }
        changeColor.classList.remove("change-color-click");
        changeColor.classList.remove("erase-color");
      }
    }
  });
};

const eraseCreationOnClick = function () {
  gameContainer.addEventListener("click", (e) => {
    if (e.target.matches(".squares")) {
      changeColor = e.target;
      changeColor.classList.remove("change-color-click");
      changeColor.classList.remove("change-color-hover");
      changeColor.classList.add("erase-color");
      changeColor.removeAttribute("style", "background-color");
    }
  });
};

const drawMethod = function () {
  for (let i = 0; i < btnDraw.length; i++) {
    btnDraw[i].addEventListener("click", (e) => {
      if (e.target.matches(".draw-on-click")) {
        drawCreationOnClick();
        drawOnClickButtonClicked = true;
        drawOnHoverButtonClicked = false;
        eraseOnClickButtonClicked = false;
      } else if (e.target.matches(".draw-on-hover")) {
        drawCreationOnHover();
        drawOnClickButtonClicked = false;
        drawOnHoverButtonClicked = true;
        eraseOnClickButtonClicked = false;
      } else if (e.target.matches(".erase")) {
        eraseCreationOnClick();
        drawOnClickButtonClicked = false;
        drawOnHoverButtonClicked = false;
        eraseOnClickButtonClicked = true;
        randomColorShow = false;
        blackWhiteShow = false;
      }
    });
  }
};

const getRandomNumber = function (min = 0, max = 255) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const result = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
};

const getRandomColors = function () {
  let result = [];
  let rgbResult;
  for (let i = 0; i < 3; i++) {
    result.push(getRandomNumber());
  }
  for (let i = 0; i < result.length; i++) {
    rgbResult = `RGB(${result[0]}, ${result[1]}, ${result[2]})`;
  }
  return rgbResult;
};

function colorOptionChoice() {
  for (let i = 0; i < outerColorChoice.length; i++) {
    outerColorChoice[i].addEventListener("click", (e) => {
      if (e.target.matches(".outer-color-choice")) {
        outerChoice = e.target.classList[1];
        console.log(outerChoice);
      }
    });
  }
}

function colorChoiceGray() {
  colorFill1.setAttribute("style", "fill: #f8f9fa");
  colorFill2.setAttribute("style", "fill: #f1f3f5");
  colorFill3.setAttribute("style", "fill: #e9ecef");
  colorFill4.setAttribute("style", "fill: #dee2e6");
  colorFill5.setAttribute("style", "fill: #ced4da");
  colorFill6.setAttribute("style", "fill: #adb5bd");
  colorFill7.setAttribute("style", "fill: #868e96");
  colorFill8.setAttribute("style", "fill: #495057");
  colorFill9.setAttribute("style", "fill: #343a40");
  colorFill10.setAttribute("style", "fill: #212529");
}

function colorChoiceRed() {
  colorFill1.setAttribute("style", "fill: #fff5f5");
  colorFill2.setAttribute("style", "fill: #ffe3e3");
  colorFill3.setAttribute("style", "fill: #ffc9c9");
  colorFill4.setAttribute("style", "fill: #ffa8a8");
  colorFill5.setAttribute("style", "fill: #ff8787");
  colorFill6.setAttribute("style", "fill: #ff6b6b");
  colorFill7.setAttribute("style", "fill: #fa5252");
  colorFill8.setAttribute("style", "fill: #f03e3e");
  colorFill9.setAttribute("style", "fill: #e03131");
  colorFill10.setAttribute("style", "fill: #c92a2a");
}

function colorOptionChosen() {
  colorOptionChoice();
  for (let i = 0; i < outerColorChoice.length; i++) {
    outerColorChoice[i].addEventListener("click", () => {
      outerColorChoiceAll.setAttribute("style", "display: none;");
      colorSVG.classList.remove("color-svg");

      if (outerChoice === "choice-gray") {
        console.log("gray");
        colorChoiceGray();
      } else if (outerChoice === "choice-red") {
        console.log("red");
        colorChoiceRed();
      } else if (outerChoice === "choice-pink") {
        console.log("pink");
      } else if (outerChoice === "choice-grape") {
        console.log("grape");
      } else if (outerChoice === "choice-violet") {
        console.log("violet");
      } else if (outerChoice === "choice-indigo") {
        console.log("indigo");
      } else if (outerChoice === "choice-blue") {
        console.log("blue");
      } else if (outerChoice === "choice-cyan") {
        console.log("cyan");
      } else if (outerChoice === "choice-teal") {
        console.log("teal");
      } else if (outerChoice === "choice-green") {
        console.log("green");
      } else if (outerChoice === "choice-lime") {
        console.log("lime");
      } else if (outerChoice === "choice-yellow") {
        console.log("yellow");
      } else if (outerChoice === "choice-orange") {
        console.log("orange");
      } else if (outerChoice === "choice-brown") {
        console.log("brown");
      }
    });
  }
}

function innerColorChosen() {
  colorOptionChosen();
  for (let i = 0; i < colorful.length; i++) {
    colorful[i].addEventListener("click", (e) => {
      innerChoice = e.target.classList;
      console.log(innerChoice);

      if (innerChoice.contains("color-fill-1")) {
        innerChosenColor = e.target.style.fill;
        innerColorChoiceFinal = true;
        console.log(innerChosenColor);
      } else if (innerChoice.contains("color-fill-2")) {
        innerChosenColor = e.target.style.fill;
        innerColorChoiceFinal = true;
        console.log(innerChosenColor);
      } else if (innerChoice.contains("color-fill-3")) {
        innerChosenColor = e.target.style.fill;
        innerColorChoiceFinal = true;
        console.log(innerChosenColor);
      } else if (innerChoice.contains("color-fill-4")) {
        innerChosenColor = e.target.style.fill;
        innerColorChoiceFinal = true;
        console.log(innerChosenColor);
      } else if (innerChoice.contains("color-fill-5")) {
        innerChosenColor = e.target.style.fill;
        innerColorChoiceFinal = true;
        console.log(innerChosenColor);
      } else if (innerChoice.contains("color-fill-6")) {
        innerChosenColor = e.target.style.fill;
        innerColorChoiceFinal = true;
        console.log(innerChosenColor);
      } else if (innerChoice.contains("color-fill-7")) {
        innerChosenColor = e.target.style.fill;
        innerColorChoiceFinal = true;
        console.log(innerChosenColor);
      } else if (innerChoice.contains("color-fill-8")) {
        innerChosenColor = e.target.style.fill;
        innerColorChoiceFinal = true;
        console.log(innerChosenColor);
      } else if (innerChoice.contains("color-fill-9")) {
        innerChosenColor = e.target.style.fill;
        innerColorChoiceFinal = true;
        console.log(innerChosenColor);
      } else if (innerChoice.contains("color-fill-10")) {
        innerChosenColor = e.target.style.fill;
        innerColorChoiceFinal = true;
        console.log(innerChosenColor);
      } else if (innerChoice.contains("go-back")) {
        outerColorChoiceAll.setAttribute("style", "display: content;");
        colorSVG.classList.add("color-svg");
        innerColorChoiceFinal = false;
      }
    });
  }
}

// innerColorChosen();

function shownColor() {
  //log here for testing
  console.log(
    `random2: ${randomColorShow}, black2: ${blackWhiteShow}, svg2: ${svgShow}`
  );
  if (randomColorShow === true) {
    let randomColor = getRandomColors();
    //for testing
    console.log(randomColor);
    changeColor.setAttribute("style", `background-color: ${randomColor};`);
  } else if (blackWhiteShow === true) {
    let colorBlack = "RGB(0, 0, 0)";
    // for testing
    console.log(colorBlack);
    changeColor.setAttribute("style", `background-color: ${colorBlack};`);
  } else if (svgShow === true && innerColorChoiceFinal === true) {
    let svgColor = innerChosenColor;
    //for testing
    console.log(`svgColor = ${svgColor}`);
    changeColor.setAttribute("style", `background-color: ${svgColor}`);
  }
}

function chooseColor() {
  for (let i = 0; i < color.length; i++) {
    color[i].addEventListener("click", (e) => {
      if (
        drawOnClickButtonClicked === true ||
        drawOnHoverButtonClicked === true
      ) {
        if (e.target.matches(".random-color")) {
          randomColorShow = true;
          blackWhiteShow = false;
          svgShow = false;
          outerColorChoiceAll.setAttribute("style", "display: content;");
          colorSVG.classList.add("color-svg");
          //for testing
          console.log(
            `random: ${randomColorShow}, black: ${blackWhiteShow}, svg: ${svgShow}`
          );
        } else if (e.target.matches(".black-white-color")) {
          blackWhiteShow = true;
          randomColorShow = false;
          svgShow = false;
          outerColorChoiceAll.setAttribute("style", "display: content;");
          colorSVG.classList.add("color-svg");
          //for testing
          console.log(
            `random: ${randomColorShow}, black: ${blackWhiteShow}, svg: ${svgShow}`
          );
        } else if (e.target.matches(".outer-color-choice")) {
          blackWhiteShow = false;
          randomColorShow = false;
          svgShow = true;
          //for testing
          console.log(
            `random: ${randomColorShow}, black: ${blackWhiteShow}, svg: ${svgShow}`
          );
          if (svgShow === true) {
            innerColorChosen();
          }
        }
      } else {
        randomColorShow = false;
        blackWhiteShow = false;
        svgShow = false;
        outerColorChoiceAll.setAttribute("style", "display: content;");
        colorSVG.classList.add("color-svg");
      }
    });
  }
}

const playGame = function () {
  createGrid();
  drawMethod();
};

playGame();
