const number = Math.floor(Math.random() * 10) + 1;

function alert() {
  const guess = parseInt(document.getElementById("guess").value, 10);
  value.preventDefault();

  if (guess > number) {
    document.getElementById("msg").innerText =
      "OOPS! SORRY!!! TRY A SMALLER NUMBER.";
  } else if (guess < number) {
    document.getElementById("msg").innerText =
      "OOPS! SORRY!!! TRY A LARGER NUMBER.";
  }
  //    else if (guess === number) {
  //     document.getElementById("msg").innerText = "Congratulations! You guessed it right!";
  //   }
  else {
    document.getElementById("msg").innerText = "Please enter a valid number.";
  }
}