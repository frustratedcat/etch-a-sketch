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
        if (randomColorShow === true || blackWhiteShow === true) {
          shownColor();
        }
        changeColor.classList.remove("change-color-hover");
        changeColor.classList.remove("erase-color");
      } else if (numberOfSquares === 32 && drawOnClickButtonClicked === true) {
        changeColor.classList.add("change-color-click");
        if (randomColorShow === true || blackWhiteShow === true) {
          shownColor();
        }
        changeColor.classList.remove("change-color-hover");
        changeColor.classList.remove("erase-color");
      } else if (numberOfSquares === 48 && drawOnClickButtonClicked === true) {
        changeColor.classList.add("change-color-click");
        if (randomColorShow === true || blackWhiteShow === true) {
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
        if (randomColorShow === true || blackWhiteShow === true) {
          shownColor();
        }
        changeColor.classList.remove("change-color-click");
        changeColor.classList.remove("erase-color");
      } else if (numberOfSquares === 32 && drawOnHoverButtonClicked === true) {
        changeColor.classList.add("change-color-hover");
        if (randomColorShow === true || blackWhiteShow === true) {
          shownColor();
        }
        changeColor.classList.remove("change-color-click");
        changeColor.classList.remove("erase-color");
      } else if (numberOfSquares === 48 && drawOnHoverButtonClicked === true) {
        changeColor.classList.add("change-color-hover");
        if (randomColorShow === true || blackWhiteShow === true) {
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
        console.log(e.target.classList);
      }
    });
  }
}

colorOptionChoice();

function shownColor() {
  if (randomColorShow === true) {
    let randomColor = getRandomColors();
    changeColor.setAttribute("style", `background-color: ${randomColor};`);
  } else if (blackWhiteShow === true) {
    let colorBlack = "RGB(0, 0, 0)";
    changeColor.setAttribute("style", `background-color: ${colorBlack};`);
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
        } else if (e.target.matches(".black-white-color")) {
          blackWhiteShow = true;
          randomColorShow = false;
        }
      } else {
        randomColorShow = false;
        blackWhiteShow = false;
      }
    });
  }
}

const playGame = function () {
  createGrid();
  drawMethod();
};

playGame();
