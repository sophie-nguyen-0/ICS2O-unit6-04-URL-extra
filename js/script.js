// Created by: sophie
// Created on: oct 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-unit6-04-URL-extra/sw.js", {
    scope: "/ICS2O-unit6-04-URL-extra/",
  })
}

/**
 * this function
 */
window.onload = function () {
  const params = new URLSearchParams(document.location.search)

  const ans = params.get("ans")

  if (ans == "cats" || ans == "cat") {
    document.getElementById("answer").innerHTML =
      '<h3> you like cats! </h3> <br><img src = "./images/cat.jpeg" alt = "cat"> <br> <h4> fun fact! Cats spend 70% of their lives sleeping! </h4>'
  } else if (ans == "dogs" || ans == "dog") {
    document.getElementById("answer").innerHTML =
      '<h3> you like dogs! </h3> <br> <img src = "./images/dog.png" alt = "dog" width="25%" height="25%"> <br> <h4> fun fact! Dogs possess only two types of cones and can only discern blue and yellow - this limited color perception is called dichromatic vision.</h4>'
  } else {
    document.getElementById("answer").innerHTML =
      '<h4>please choose cats or dog. nothing else.</h4> <br> <img src = "./images/madPikachu.jpg" alt="mad pikachu" width="25%" height="25%"> <p> you made pikachu mad </p>'
  }
}
