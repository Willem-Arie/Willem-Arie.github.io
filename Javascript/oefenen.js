let input1 = window.prompt("Your first input here");
let input2 = window.prompt("Your second input here");
let input3 = window.prompt("Your third input here");

while (input1 > input2) {
  console.log(input1);
  input1 = input1 - input3
}

let input4 = window.prompt("");
let input5 = window.prompt("");
let number4 = parseInt(input4);
let number5 = parseInt(input5);

function addNumbers() {
  let sum = number4 + number5;
  if(sum % 2 == 0) {
    return true
  } else {
    return false
  }
}

if (addNumbers() == true) {
  input4 * input5;
} else {
  input4 / input5;
}