let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let btn1 = document.querySelector(".btn1");
let header1 = document.querySelector(".header1");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let player = document.querySelector(".player");
let btn2 = document.querySelector(".btn2");
let lives = document.querySelector(".lives");
let count = 10;
btn1.addEventListener("click", function () {
  if (input1.value == "") {
    header1.innerHTML = "The box can not be empty";
  } else if (input1.value > 10 || input1.value < 0) {
    header1.innerHTML =
      "Numbers greater than 10 and less than 0 can not be givena";
  } else {
    box1.style.display = "none";
    box2.style.display = "block";
    player.innerHTML = "Player 2";
    lives.style.display = "block";
    header1.style.display = "none";
  }
});
btn2.addEventListener("click", function () {
  if (input2.value == "") {
    header1.style.display = "block";
    header1.innerHTML = "The box can not be empty";
  } else if (input2.value > 10 || input2.value < 0) {
    header1.style.display = "block";
    header1.innerHTML =
      "Numbers greater than 10 and less than 0 can not be given";
  } else {
    if (input1.value == input2.value) {
      header1.style.display = "block";
      header1.innerHTML = "Bingo!";
      lives.style.display = "block";
      box2.style.display = "none";
    } else {
      header1.innerHTML = "Please try again";
      count--;
      lives.style.display = "block";
      if (count == 0) {
        lives.innerHTML = "Game Over!";
        box2.style.display = "none";
        header1.style.display = "none";
      } else {
        lives.innerHTML = count + "Lives";
      }
    }
  }
});
