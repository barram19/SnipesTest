// Define the URL of your Google Cloud Function
const cloudFunctionUrl = 'https://us-central1-cbbbot-413503.cloudfunctions.net/barrysnipesv3';

// Function to send a request to the cloud function
async function fetchResponse(input) {
    const response = await fetch(cloudFunctionUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: input })
    });
    return response.json();
}

// Function to handle form submission
async function handleSubmit(event) {
    event.preventDefault();
    const userInput = document.getElementById('userInput').value;
    // Display user input
    document.getElementById('userInputText').innerText = userInput;
    document.getElementById('userInputContainer').style.display = 'block';

    // Fetch response from cloud function
    const response = await fetchResponse(userInput);
    // Display bot response
    document.getElementById('botResponseText').innerText = response;
    document.getElementById('botResponseContainer').style.display = 'block';
}

// Attach event listener to the form
document.getElementById('inputForm').addEventListener('submit', handleSubmit);
