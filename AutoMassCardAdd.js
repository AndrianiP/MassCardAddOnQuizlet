// ==UserScript==
// @name         Automatically Add Cards on Quizlet
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Allows User to set a number of cards to add on Quizlet automatically without having to click multiple times.
// @author       Andriani Perez
// @match        https://quizlet.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=quizlet.com
// @grant        none
// ==/UserScript==

window.onload = function(){

    const addCard = document.getElementById("addRow");
    console.log(addCard);
    var iteration = 0;

    function sleep(milliseconds) {
      const date = Date.now();
      let currentDate = null;
      do {
        currentDate = Date.now();
      } while (currentDate - date < milliseconds);
    }

    if (addCard != null ){
        document.getElementById("addRow").addEventListener("click", function (){
            if(iteration ==0) {
                var numCard = window.prompt("Enter number of cards to add: ");
                iteration = 1;
            }
            for(var i=0; i < numCard; i++){
                document.getElementById('addRow').click();
                console.log(i);
                sleep(1);
            }
        })
    }};
