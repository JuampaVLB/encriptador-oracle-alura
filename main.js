'use strict';

var response = '';
var separator;

// DOM

const encriptar = document.querySelector('#encriptar');
const desencriptar = document.querySelector('#desencriptar');
const stack = document.querySelector('.stack');
const txt = document.querySelector('#txt');

// Arrays

const words = ['e', 'i', 'a', 'o', 'u'];
const secret = ['enter', 'imes', 'ai', 'ober', 'ufat'];

// Stack

const addStack = (str) => {
    
    let p = document.createElement("p");
    let text = document.createTextNode(str);

    p.appendChild(text);

    stack.appendChild(p);
}
// Desencriptar

desencriptar.addEventListener('click', () => {
    let value = txt.value;

    let i = 0;

    secret.forEach(str => {
        separator = value.search(str);
        
        if(separator !== -1) {
            console.log(separator);
        }
    
    });


})

// Encriptar

encriptar.addEventListener('click', () => {
    let value = txt.value.split('');

    let i = 0;

    value.forEach(word => {
      words.forEach((wordCompare, index) => {
        if(word === wordCompare) {
            response+=secret[index];
        } 
      });

      if(word !== 'a' && word !== 'e' && word !== 'i' && word !== 'o' && word !== 'u') {
        response+=word;
      }

    });

    addStack(response);

    response = '';

    txt.value = '';

})