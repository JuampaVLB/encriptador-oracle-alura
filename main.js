"use strict";

var response = "";
var separator;

// DOM

const encriptar = document.querySelector("#encriptar");
const desencriptar = document.querySelector("#desencriptar");
const copiar = document.querySelector("#copiar");
const stack = document.querySelector(".stack");
const txt = document.querySelector("#txt");

// Arrays

const letters = ["e", "i", "a", "o", "u"];
const secret = ["enter", "imes", "ai", "ober", "ufat"];

// Stack

const addStack = (str) => {
  console.log(stack.childNodes.length);
  if (stack.childNodes.length > 1) {
    copiar.textContent = 'Copiar';
    stack.removeChild(stack.firstElementChild);
  }

  response = "";

  txt.value = "";

  let p = document.createElement("p");

  let text = document.createTextNode(str);

  p.appendChild(text);

  stack.append(p);
};

// Desencriptar

desencriptar.addEventListener("click", () => {
  let value = txt.value;

  let i = 0;

  response = value
    .replaceAll(secret[0], letters[0])
    .replaceAll(secret[1], letters[1])
    .replaceAll(secret[2], letters[2])
    .replaceAll(secret[3], letters[3])
    .replaceAll(secret[4], letters[4]);

  return addStack(response);
});

// Encriptar

encriptar.addEventListener("click", () => {
  let value = txt.value.split("");

  let i = 0;

  value.forEach((letter) => {
    letters.forEach((wordCompare, index) => {
      if (letter === wordCompare) {
        response += secret[index];
      }
    });

    if (
      letter !== "a" &&
      letter !== "e" &&
      letter !== "i" &&
      letter !== "o" &&
      letter !== "u"
    ) {
      response += letter;
    }
  });

  return addStack(response);
});

// Copiar 

copiar.addEventListener('click', () => {

  let p = document.querySelector('p');

  if(p != null) {

  navigator.clipboard.writeText(p.textContent);

  copiar.textContent = 'Copiado';

  }

})