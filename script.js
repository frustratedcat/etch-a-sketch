"use strict";

let btnSizeContainer = document.querySelectorAll(".btn-size-container");
const btn16 = document.querySelector(".btn-16");
const btn32 = document.querySelector(".btn-32");
const btn48 = document.querySelector(".btn-48");
const clearBoard = document.querySelector(".clear-board");

const gameContainer = document.querySelector(".game-container");

const createGrid16 = function () {
  for (let i = 0; i < 16 * 16; i++) {
    const squares = document.createElement("div");
    squares.classList.add("squares");
    squares.setAttribute(
      "style",
      "background-color: blue; width: 35px; height: 35px; border: 0.1px solid white;"
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
      "background-color: blue; width: 17.5px; height: 17.5px; border: 0.1px solid white;"
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
      "background-color: blue; width: 11.67px; height: 11.667px; border: 0.1px solid white;"
    );

    gameContainer.appendChild(squares);
  }
};

const createGrid = function () {
  for (let i = 0; i < btnSizeContainer.length; i++) {
    btnSizeContainer[i].addEventListener("click", (e) => {
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

createGrid();
