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

let numberOfSquares;

const createGrid16 = function () {
  for (let i = 0; i < 16 * 16; i++) {
    const squares = document.createElement("div");
    squares.classList.add("squares");
    squares.setAttribute(
      "style",
      "width: 35px; height: 35px; border: 0.1px solid black;"
    );
    gameContainer.appendChild(squares);
  }
};

const createGrid32 = function () {
  for (let i = 0; i < 32 * 32; i++) {
    const squares = document.createElement("div");
    squares.classList.add("squares");
    squares.setAttribute(
      "style",
      "width: 17.5px; height: 17.5px; border: 0.1px solid black;"
    );
    gameContainer.appendChild(squares);
  }
};

const createGrid48 = function () {
  for (let i = 0; i < 48 * 48; i++) {
    const squares = document.createElement("div");
    squares.classList.add("squares");
    squares.setAttribute(
      "style",
      "width: 11.67px; height: 11.667px; border: 0.1px solid black;"
    );
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
  gameContainer.addEventListener("click", (e) => {
    if (e.target.matches(".squares")) {
      const changeColor = e.target;

      changeColor.classList.remove("change-color-hover");

      if (numberOfSquares === 16) {
        changeColor.classList.add("change-color-16");
        changeColor.classList.toggle("change-color-click");
      } else if (numberOfSquares === 32) {
        changeColor.classList.add("change-color-32");
        changeColor.classList.toggle("change-color-click");
      } else if (numberOfSquares === 48) {
        changeColor.classList.add("change-color-48");
        changeColor.classList.toggle("change-color-click");
      }
    }
  });
};

const drawCreationOnHover = function () {
  gameContainer.addEventListener("mouseover", (e) => {
    if (e.target.matches(".squares")) {
      const changeColor = e.target;

      changeColor.classList.remove("change-color-click");

      if (numberOfSquares === 16) {
        changeColor.classList.add("change-color-16");
        changeColor.classList.toggle("change-color-hover");
      } else if (numberOfSquares === 32) {
        changeColor.classList.add("change-color-32");
        changeColor.classList.toggle("change-color-hover");
      } else if (numberOfSquares === 48) {
        changeColor.classList.add("change-color-48");
        changeColor.classList.toggle("change-color-hover");
      }
    }
  });
};

const eraseCreationOnClick = function () {
  gameContainer.addEventListener("click", (e) => {
    if (e.target.matches(".squares")) {
      const changeColor = e.target;
      changeColor.classList.remove("change-color-click");
      changeColor.classList.remove("change-color-hover");
    }
  });
};

const drawMethod = function () {
  for (let i = 0; i < btnDraw.length; i++) {
    btnDraw[i].addEventListener("click", (e) => {
      if (e.target.matches(".draw-on-click")) {
        drawCreationOnClick();
      } else if (e.target.matches(".draw-on-hover")) {
        drawCreationOnHover();
      } else if (e.target.matches(".erase")) {
        eraseCreationOnClick();
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

function chooseColor() {
  let randomColor;
  for (let i = 0; i < color.length; i++) {
    color[i].addEventListener("click", (e) => {
      if (e.target.matches(".random-color")) {
        randomColor = getRandomColors();
        console.log(randomColor);
        changeColorClick.setAttribute(
          "style",
          `background-color: ${randomColor}`
        );
      } else if (e.target.matches(".black-white-color")) {
        console.log("RGB(0, 0, 0)");
      }
    });
  }
}

chooseColor();
createGrid();
drawMethod();
