// Copyright (c) 2022 Julienka Sohal All rights reserved
//
// Created by: Julienka Sohal
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit5-07-JS/sw.js", {
    scope: "/ICS20-Unit5-07-JS/",
  })
}

//process
function myButtonClicked() {
  let input = parseInt(document.getElementById("typeNum").value)
  let sum = 0
  for (let i = 0; i <= input; i++) {
    sum = (input / 2) * (input + 1)
  }
  document.getElementById("ANS").innerHTML = "The answer is " + sum + "."
}
