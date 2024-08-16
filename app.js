// console.log("hello Darling");

let button = document.getElementById("guess");
let restart = document.getElementById("restart");
let counter = document.getElementById("counter");
let hint = document.getElementById("hint");

let randomValue = generateRandomValue();
let count = 0;
let val;
let won = false;

function generateRandomValue() {
  return Math.floor(Math.random() * 100) + 1;
}

button.onclick = function () {
  val = Number(document.getElementById("guessValue").value);
  getHint(val);
  increaseCounter();
};

function getHint() {
  if (val >= 1 && val <= 100) {
    if (val === randomValue) {
      hint.innerText = `Congratulations you won in ${count + 1}`;
      won = true;
    } else if (randomValue - val > 10) {
      hint.innerText = "You Guess is too low!";
    } else if (val - randomValue > 10) {
      hint.innerText = "You Guess is too high!";
    } else if (randomValue - val <= 10 && randomValue > val) {
      hint.innerText = "You Guess is slight low!";
    } else if (val - randomValue <= 10 && val > randomValue) {
      hint.innerText = "You Guess is slight low!";
    }
  } else {
    hint.innerText = "No hint for this value";
  }
}

function increaseCounter() {
  if (count < 4) {
    count++;
    counter.innerText = count;
  } else {
    counter.innerText = "Guesses Finished";
    if (!won) {
      hint.innerText = `You Lost, the answer was ${randomValue}`;
    }
  }
}

restart.onclick = function () {
  location.href = "index.html";
};
