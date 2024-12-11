function sendSMS() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;
    const statusDiv = document.getElementById('status');

    const apiUrl = 'https://nethwieginedev.vercel.app/api/freesms';

    // Create the payload
    const payload = {
        number: phoneNumber,
        message: message
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Ensure the API knows you're sending JSON
        },
        body: JSON.stringify(payload) // Convert the payload to a JSON string
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('API Response:', data);
            if (data.success) {
                statusDiv.textContent = 'Message sent successfully!';
                statusDiv.style.color = 'green';
            } else {
                statusDiv.textContent = `Failed to send message: ${data.message}`;
                statusDiv.style.color = 'red';
            }
        })
        .catch(error => {
            console.error('Error sending message:', error);
            statusDiv.textContent = `Failed to send message: ${error.message}`;
            statusDiv.style.color = 'red';
        });
}
