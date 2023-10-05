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

function colorChoicePink() {
  colorFill1.setAttribute("style", "fill: #fff0f6");
  colorFill2.setAttribute("style", "fill: #ffdeeb");
  colorFill3.setAttribute("style", "fill: #fcc2d7");
  colorFill4.setAttribute("style", "fill: #faa2c1");
  colorFill5.setAttribute("style", "fill: #f783ac");
  colorFill6.setAttribute("style", "fill: #f06595");
  colorFill7.setAttribute("style", "fill: #e64980");
  colorFill8.setAttribute("style", "fill: #d6336c");
  colorFill9.setAttribute("style", "fill: #c2255c");
  colorFill10.setAttribute("style", "fill: #a61e4d");
}

function colorChoiceGrape() {
  colorFill1.setAttribute("style", "fill: #f8f0fc");
  colorFill2.setAttribute("style", "fill: #f3d9fa");
  colorFill3.setAttribute("style", "fill: #eebefa");
  colorFill4.setAttribute("style", "fill: #e599f7");
  colorFill5.setAttribute("style", "fill: #da77f2");
  colorFill6.setAttribute("style", "fill: #cc5de8");
  colorFill7.setAttribute("style", "fill: #be4bdb");
  colorFill8.setAttribute("style", "fill: #ae3ec9");
  colorFill9.setAttribute("style", "fill: #9c36b5");
  colorFill10.setAttribute("style", "fill: #862e9c");
}

function colorChoiceViolet() {
  colorFill1.setAttribute("style", "fill: #f3f0ff");
  colorFill2.setAttribute("style", "fill: #e5dbff");
  colorFill3.setAttribute("style", "fill: #d0bfff");
  colorFill4.setAttribute("style", "fill: #b197fc");
  colorFill5.setAttribute("style", "fill: #9775fa");
  colorFill6.setAttribute("style", "fill: #845ef7");
  colorFill7.setAttribute("style", "fill: #7950f2");
  colorFill8.setAttribute("style", "fill: #7048e8");
  colorFill9.setAttribute("style", "fill: #6741d9");
  colorFill10.setAttribute("style", "fill: #5f3dc4");
}

function colorChoiceIndigo() {
  colorFill1.setAttribute("style", "fill: #edf2ff");
  colorFill2.setAttribute("style", "fill: #dbe4ff");
  colorFill3.setAttribute("style", "fill: #bac8ff");
  colorFill4.setAttribute("style", "fill: #91a7ff");
  colorFill5.setAttribute("style", "fill: #748ffc");
  colorFill6.setAttribute("style", "fill: #5c7cfa");
  colorFill7.setAttribute("style", "fill: #4c6ef5");
  colorFill8.setAttribute("style", "fill: #4263eb");
  colorFill9.setAttribute("style", "fill: #3b5bdb");
  colorFill10.setAttribute("style", "fill: #364fc7");
}

function colorChoiceBlue() {
  colorFill1.setAttribute("style", "fill: #e7f5ff");
  colorFill2.setAttribute("style", "fill: #d0ebff");
  colorFill3.setAttribute("style", "fill: #a5d8ff");
  colorFill4.setAttribute("style", "fill: #74c0fc");
  colorFill5.setAttribute("style", "fill: #4dabf7");
  colorFill6.setAttribute("style", "fill: #339af0");
  colorFill7.setAttribute("style", "fill: #228be6");
  colorFill8.setAttribute("style", "fill: #1c7ed6");
  colorFill9.setAttribute("style", "fill: #1971c2");
  colorFill10.setAttribute("style", "fill: #1864ab");
}

function colorChoiceCyan() {
  colorFill1.setAttribute("style", "fill: #e3fafc");
  colorFill2.setAttribute("style", "fill: #c5f6fa");
  colorFill3.setAttribute("style", "fill: #99e9f2");
  colorFill4.setAttribute("style", "fill: #66d9e8");
  colorFill5.setAttribute("style", "fill: #3bc9db");
  colorFill6.setAttribute("style", "fill: #22b8cf");
  colorFill7.setAttribute("style", "fill: #15aabf");
  colorFill8.setAttribute("style", "fill: #1098ad");
  colorFill9.setAttribute("style", "fill: #0c8599");
  colorFill10.setAttribute("style", "fill: #0b7285");
}

function colorChoiceTeal() {
  colorFill1.setAttribute("style", "fill: #e6fcf5");
  colorFill2.setAttribute("style", "fill: #c3fae8");
  colorFill3.setAttribute("style", "fill: #96f2d7");
  colorFill4.setAttribute("style", "fill: #63e6be");
  colorFill5.setAttribute("style", "fill: #38d9a9");
  colorFill6.setAttribute("style", "fill: #20c997");
  colorFill7.setAttribute("style", "fill: #12b886");
  colorFill8.setAttribute("style", "fill: #0ca678");
  colorFill9.setAttribute("style", "fill: #099268");
  colorFill10.setAttribute("style", "fill: #087f5b");
}

function colorChoiceGreen() {
  colorFill1.setAttribute("style", "fill: #ebfbee");
  colorFill2.setAttribute("style", "fill: #d3f9d8");
  colorFill3.setAttribute("style", "fill: #b2f2bb");
  colorFill4.setAttribute("style", "fill: #8ce99a");
  colorFill5.setAttribute("style", "fill: #69db7c");
  colorFill6.setAttribute("style", "fill: #51cf66");
  colorFill7.setAttribute("style", "fill: #40c057");
  colorFill8.setAttribute("style", "fill: #37b24d");
  colorFill9.setAttribute("style", "fill: #2f9e44");
  colorFill10.setAttribute("style", "fill: #2b8a3e");
}

function colorChoiceLime() {
  colorFill1.setAttribute("style", "fill: #f4fce3");
  colorFill2.setAttribute("style", "fill: #e9fac8");
  colorFill3.setAttribute("style", "fill: #d8f5a2");
  colorFill4.setAttribute("style", "fill: #c0eb75");
  colorFill5.setAttribute("style", "fill: #a9e34b");
  colorFill6.setAttribute("style", "fill: #94d82d");
  colorFill7.setAttribute("style", "fill: #82c91e");
  colorFill8.setAttribute("style", "fill: #74b816");
  colorFill9.setAttribute("style", "fill: #66a80f");
  colorFill10.setAttribute("style", "fill: #5c940d");
}

function colorChoiceYellow() {
  colorFill1.setAttribute("style", "fill: #fff9db");
  colorFill2.setAttribute("style", "fill: #fff3bf");
  colorFill3.setAttribute("style", "fill: #ffec99");
  colorFill4.setAttribute("style", "fill: #ffe066");
  colorFill5.setAttribute("style", "fill: #ffd43b");
  colorFill6.setAttribute("style", "fill: #fcc419");
  colorFill7.setAttribute("style", "fill: #fab005");
  colorFill8.setAttribute("style", "fill: #f59f00");
  colorFill9.setAttribute("style", "fill: #f08c00");
  colorFill10.setAttribute("style", "fill: #e67700");
}

function colorChoiceOrange() {
  colorFill1.setAttribute("style", "fill: #fff4e6");
  colorFill2.setAttribute("style", "fill: #ffe8cc");
  colorFill3.setAttribute("style", "fill: #ffd8a8");
  colorFill4.setAttribute("style", "fill: #ffc078");
  colorFill5.setAttribute("style", "fill: #ffa94d");
  colorFill6.setAttribute("style", "fill: #ff922b");
  colorFill7.setAttribute("style", "fill: #fd7e14");
  colorFill8.setAttribute("style", "fill: #f76707");
  colorFill9.setAttribute("style", "fill: #e8590c");
  colorFill10.setAttribute("style", "fill: #d9480f");
}

function colorChoiceBrown() {
  colorFill1.setAttribute("style", "fill: #FFEDD7");
  colorFill2.setAttribute("style", "fill: #F5E2CC");
  colorFill3.setAttribute("style", "fill: #F1DEC9");
  colorFill4.setAttribute("style", "fill: #C8B6A6");
  colorFill5.setAttribute("style", "fill: #A4907C");
  colorFill6.setAttribute("style", "fill: #8D7B68");
  colorFill7.setAttribute("style", "fill: #A77979");
  colorFill8.setAttribute("style", "fill: #704F4F");
  colorFill9.setAttribute("style", "fill: #553939");
  colorFill10.setAttribute("style", "fill: #472D2D");
}

function colorOptionChosen() {
  colorOptionChoice();
  for (let i = 0; i < outerColorChoice.length; i++) {
    outerColorChoice[i].addEventListener("click", () => {
      outerColorChoiceAll.setAttribute("style", "display: none;");
      colorSVG.classList.remove("color-svg");

      if (outerChoice === "choice-gray") {
        colorChoiceGray();
      } else if (outerChoice === "choice-red") {
        colorChoiceRed();
      } else if (outerChoice === "choice-pink") {
        colorChoicePink();
      } else if (outerChoice === "choice-grape") {
        colorChoiceGrape();
      } else if (outerChoice === "choice-violet") {
        colorChoiceViolet();
      } else if (outerChoice === "choice-indigo") {
        colorChoiceIndigo();
      } else if (outerChoice === "choice-blue") {
        colorChoiceBlue();
      } else if (outerChoice === "choice-cyan") {
        colorChoiceCyan();
      } else if (outerChoice === "choice-teal") {
        colorChoiceTeal();
      } else if (outerChoice === "choice-green") {
        colorChoiceGreen();
      } else if (outerChoice === "choice-lime") {
        colorChoiceLime();
      } else if (outerChoice === "choice-yellow") {
        colorChoiceYellow();
      } else if (outerChoice === "choice-orange") {
        colorChoiceOrange();
      } else if (outerChoice === "choice-brown") {
        colorChoiceBrown();
      }
    });
  }
}

function innerColorChosen() {
  colorOptionChosen();
  for (let i = 0; i < colorful.length; i++) {
    colorful[i].addEventListener("click", (e) => {
      innerChoice = e.target.classList;

      if (innerChoice.contains("color-fill-1")) {
        innerChosenColor = e.target.style.fill;
        innerColorChoiceFinal = true;
      } else if (innerChoice.contains("color-fill-2")) {
        innerChosenColor = e.target.style.fill;
        innerColorChoiceFinal = true;
      } else if (innerChoice.contains("color-fill-3")) {
        innerChosenColor = e.target.style.fill;
        innerColorChoiceFinal = true;
      } else if (innerChoice.contains("color-fill-4")) {
        innerChosenColor = e.target.style.fill;
        innerColorChoiceFinal = true;
      } else if (innerChoice.contains("color-fill-5")) {
        innerChosenColor = e.target.style.fill;
        innerColorChoiceFinal = true;
      } else if (innerChoice.contains("color-fill-6")) {
        innerChosenColor = e.target.style.fill;
        innerColorChoiceFinal = true;
      } else if (innerChoice.contains("color-fill-7")) {
        innerChosenColor = e.target.style.fill;
        innerColorChoiceFinal = true;
      } else if (innerChoice.contains("color-fill-8")) {
        innerChosenColor = e.target.style.fill;
        innerColorChoiceFinal = true;
      } else if (innerChoice.contains("color-fill-9")) {
        innerChosenColor = e.target.style.fill;
        innerColorChoiceFinal = true;
      } else if (innerChoice.contains("color-fill-10")) {
        innerChosenColor = e.target.style.fill;
        innerColorChoiceFinal = true;
      } else if (innerChoice.contains("go-back")) {
        outerColorChoiceAll.setAttribute("style", "display: content;");
        colorSVG.classList.add("color-svg");
        innerColorChoiceFinal = false;
      }
    });
  }
}

function shownColor() {
  if (randomColorShow === true) {
    let randomColor = getRandomColors();
    changeColor.setAttribute("style", `background-color: ${randomColor};`);
  } else if (blackWhiteShow === true) {
    let colorBlack = "RGB(0, 0, 0)";
    changeColor.setAttribute("style", `background-color: ${colorBlack};`);
  } else if (svgShow === true && innerColorChoiceFinal === true) {
    let svgColor = innerChosenColor;
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
        } else if (e.target.matches(".black-white-color")) {
          blackWhiteShow = true;
          randomColorShow = false;
          svgShow = false;
          outerColorChoiceAll.setAttribute("style", "display: content;");
          colorSVG.classList.add("color-svg");
        } else if (e.target.matches(".outer-color-choice")) {
          blackWhiteShow = false;
          randomColorShow = false;
          svgShow = true;
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
