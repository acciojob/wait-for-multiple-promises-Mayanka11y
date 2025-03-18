//your JS code here. If required.
// Function to create a promise that resolves after a random delay
function createPromise() {
  const delay = Math.random() * 2 + 1; // Random delay between 1 and 3 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(delay.toFixed(3)); // Resolve with the delay time, formatted to 3 decimal places
    }, delay * 1000); // Convert seconds to milliseconds
  });
}

// Function to update the table with the results
function updateTable(results) {
  const output = document.getElementById("output");
  output.innerHTML = ""; // Clear the loading message

  let totalTime = 0;

  // Populate the table with the results
  results.forEach((time, index) => {
    const row = document.createElement("tr");
    const promiseName = document.createElement("td");
    const timeTaken = document.createElement("td");

    promiseName.textContent = `Promise ${index + 1}`;
    timeTaken.textContent = time;

    row.appendChild(promiseName);
    row.appendChild(timeTaken);
    output.appendChild(row);

    // Track the maximum time
    if (parseFloat(time) > totalTime) {
      totalTime = parseFloat(time);
    }
  });

  // Add the total row
  const totalRow = document.createElement("tr");
  const totalName = document.createElement("td");
  const totalTimeCell = document.createElement("td");

  totalName.textContent = "Total";
  totalTimeCell.textContent = totalTime.toFixed(3);

  totalRow.appendChild(totalName);
  totalRow.appendChild(totalTimeCell);
  output.appendChild(totalRow);
}

// Create an array of 3 promises
const promises = [createPromise(), createPromise(), createPromise()];

// Wait for all promises to resolve
Promise.all(promises)
  .then((results) => {
    updateTable(results); // Update the table with the results
  })
  .catch((error) => {
    console.error("Error:", error);
  });
