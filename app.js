// This line waits for the whole HTML page to load before running our script.
document.addEventListener('DOMContentLoaded', () => {
  // Get references to the HTML elements we need to work with.
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const resultsContainer = document.getElementById('resultsContainer');

  // This is the main function that will be called to perform the search.
  function performSearch() {
    // Get the user's search text and convert it to lowercase for easier
    // matching.
    const query = searchInput.value.toLowerCase();

    // If the search bar is empty, do nothing.
    if (!query) {
      resultsContainer.innerHTML = '';  // Clear previous results
      return;
    }

    // Filter the 'peripherals' array from data.js
    // It will return a new array with only the items that match the search
    // query.
    const searchResults = peripherals.filter(device => {
      const modelMatch = device.model.toLowerCase().includes(query);
      const categoryMatch = device.category.toLowerCase().includes(query);

      // Check if any of the common problems' symptoms match the query.
      const problemMatch = device.commonProblems.some(
          problem => problem.symptom.toLowerCase().includes(query));

      // Return true if the model, category, OR any problem matches.
      return modelMatch || categoryMatch || problemMatch;
    });

    // Now, display the results on the page.
    displayResults(searchResults);
  }

  // This function takes the array of results and generates HTML to show them.
  function displayResults(results) {
    // First, clear any old results from the screen.
    resultsContainer.innerHTML = '';

    // If the results array is empty, show a "not found" message.
    if (results.length === 0) {
      resultsContainer.innerHTML = '<p>No se encontraron resultados.</p>';
      return;
    }

    // Loop through each result and create an HTML card for it.
    results.forEach(device => {
      const deviceCard = document.createElement('div');
      deviceCard.className = 'device-card';  // We'll add styling for this later

      // Create the HTML content for the card using template literals (` `).
      let problemsHTML = device.commonProblems
                             .map(p => `
                <li>
                    <strong>Síntoma:</strong> ${p.symptom}<br>
                    <strong>Causa:</strong> ${p.cause}<br>
                    <strong>Solución:</strong> ${p.solution}
                </li>
            `).join('');

      deviceCard.innerHTML = `
                <h3>${device.model}</h3>
                <p class="category">${device.category}</p>
                <ul>
                    ${problemsHTML}
                </ul>
            `;

      // Add the new card to the results container on the page.
      resultsContainer.appendChild(deviceCard);
    });
  }

  // Make the search happen when the button is clicked.
  searchButton.addEventListener('click', performSearch);

  // BONUS: Also search whenever the user presses the "Enter" key in the search
  // box.
  searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      performSearch();
    }
  });
});