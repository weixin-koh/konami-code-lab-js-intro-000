const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

var index = 0;

function init() {
  // Attaching an keydown event listener to document.body
  document.body.addEventListener("keydown", (event) => {
    // Now, how can we check for which specific key was pressed?
    event.key
  }
}

function onKeyDownHandler(e) {
  const key = e.key;

  if (key === alphabet[index]) {
    index++;

    if (index === alphabet.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
