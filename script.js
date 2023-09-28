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

const div = document.querySelector("div");

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
      "white; width: 17.5px; height: 17.5px; border: 0.1px solid black;"
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
      } else if (e.target.matches(".btn-32")) {
        removeGameContainerChildren();
        createGrid32();
      } else if (e.target.matches(".btn-48")) {
        removeGameContainerChildren();
        createGrid48();
      } else if (e.target.matches(".clear-board")) {
        removeGameContainerChildren();
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
      changeColor.classList.toggle("change-color-click");
      changeColor.classList.remove("change-color-hover");
    }
  });
};

const drawCreationOnHover = function () {
  gameContainer.addEventListener("mouseover", (e) => {
    if (e.target.matches(".squares")) {
      const changeColor = e.target;
      changeColor.classList.toggle("change-color-hover");
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

createGrid();
drawMethod();
