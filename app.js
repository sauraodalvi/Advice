// Function to fetch and update a new quote
async function fetchAndUpdateQuote() {
    try {
        // Fetch advice from API
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();

        // Extract advice and id from the response
        const advice = data.slip.advice;
        const adviceId = data.slip.id;

        // Update HTML dynamically
        document.getElementById('adviceId').innerText = adviceId;
        document.getElementById('adviceTextContainer').innerText = `"${advice}"`;

        // Shake the button using the animate CSS property
        const loadQuoteButton = document.getElementById('loadQuoteButton');
        loadQuoteButton.classList.add('shake');

        // Wait for the shake animation to complete (500ms) before removing the class
        await new Promise(resolve => setTimeout(resolve, 500));

        loadQuoteButton.classList.remove('shake'); // Remove the class after the animation ends
    } catch (error) {
        console.error('Error fetching advice:', error);
    }
}

// Add event listener to the button
document.addEventListener('DOMContentLoaded', function () {
    const loadQuoteButton = document.getElementById('loadQuoteButton');
    loadQuoteButton.addEventListener('click', fetchAndUpdateQuote);

    // Initial load of a quote
    fetchAndUpdateQuote();
});
