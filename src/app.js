/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["the dog", "my mom", "my husband", "Aaron", "Jack", "my husband"];
  let action = ["ate", "hid", "cooked", "stole", "slept", "broke", "crushed"];
  let what = [
    "my homework",
    "my phone",
    "my book",
    "my house",
    "the dinner",
    "the car"
  ];
  let when = [
    "before the class",
    "at morning",
    "yesterday",
    "when I was eating",
    "when I was sleeping",
    "when I was at GYM"
  ];

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function getRandom(anyArray) {
    let max = who.length - 1;
    let min = 0;
    let random = getRandomNumber(min, max);
    return anyArray[random];
  }
  document.querySelector("#excuse").innerHTML =
    getRandom(who) +
    " " +
    getRandom(action) +
    " " +
    getRandom(what) +
    " " +
    getRandom(when);
};
