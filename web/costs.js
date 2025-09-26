// Cost calculator script for the costs page
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('calculate-btn');
  const areaInput = document.getElementById('area');
  const resultDiv = document.getElementById('estimate-result');

  button.addEventListener('click', () => {
    const area = parseFloat(areaInput.value);
    if (isNaN(area) || area <= 0) {
      resultDiv.textContent = 'Please enter a valid area.';
      return;
    }
    // Sum all cost values from the table
    const costCells = document.querySelectorAll('td.cost');
    let totalCostPerSqFt = 0;
    costCells.forEach((cell) => {
      const val = parseFloat(cell.dataset.value);
      if (!isNaN(val)) {
        totalCostPerSqFt += val;
      }
    });
    const estimate = area * totalCostPerSqFt;
    // Format with commas
    const formatted = estimate.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    resultDiv.textContent = 'Estimated total cost for ' + area + ' sq ft: $' + formatted;
  });
});
