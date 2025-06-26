document.getElementById("calculateBtn").addEventListener("click", function() {
  let inputs = document.getElementsByClassName("mark");
  let total = 0;
  let count = inputs.length;

  // Collect marks using loop
  for (let i = 0; i < count; i++) {
    let value = Number(inputs[i].value);
    if (isNaN(value) || value < 0 || value > 100) {
      document.getElementById("result").innerHTML = "Please enter valid marks (0-100) for all subjects.";
      return;
    }
    total += value;
  }

  let average = total / count;
  let grade;

  // Conditional grade assignment
  if (average >= 90) {
    grade = "A+";
  } else if (average >= 80) {
    grade = "A";
  } else if (average >= 70) {
    grade = "B";
  } else if (average >= 60) {
    grade = "C";
  } else if (average >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }

  // Show result
  document.getElementById("result").innerHTML = `
    <strong>Total Marks:</strong> ${total}<br>
    <strong>Average:</strong> ${average.toFixed(2)}<br>
    <strong>Grade:</strong> ${grade}
  `;
});
