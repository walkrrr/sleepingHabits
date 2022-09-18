//Skills practiced: conditional statements, comparison operators, prompt(), Number()

var sleepNumber = Number(
  prompt(
    `Please enter a whole number (0 – 12) representing your hours of sleep`
  )
);

if (sleepNumber >= 12) {
  console.log(`Be truthful and try again!`);
} else if (sleepNumber >= 8) {
  console.log(`Congratulations!`);
} else if (sleepNumber >= 5) {
  console.log(`You did ok, but should consider getting more sleep`);
} else {
  console.log(`Get more sleep`);
}
