"use strict";

const request = prompt("Enter a number N:");

if (request === null) {
  alert("You canceled");
} else if (request.trim() === "") {
  alert("You entered nothing");
} else if (isNaN(request)) {
  alert("You entered not a number");
} else {
  const N = Number(request);
  let result = "Numbers is less than or equal to " + N + ": ";

  for (let i = 1; i <= 100; i++) {
    if (i * i <= N) {
      result += i + " ";
    }
  }

  alert(result);
}
