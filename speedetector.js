function speedDetector() {
  const speed = parseInt(prompt("Enter the speed of the car:"));
  const speedLimit = 70;

  if (speed < speedLimit) {
    return "Ok";
  } else {
    const demeritPoints = Math.floor((speed - speedLimit) / 5);
    if (demeritPoints > 12) {
      return "License suspended";
    } else {
      return `Points: ${demeritPoints}`;
    }
  }
}

console.log(speedDetector());
