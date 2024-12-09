function sendSMS() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;
    const statusDiv = document.getElementById('status');

    const apiUrl = `https://nethwieginedev.vercel.app/api/freesms?message=${encodeURIComponent(message)}&number=${encodeURIComponent(phoneNumber)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log('API response:', data);

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
            statusDiv.textContent = 'Failed to send message. Please try again.';
            statusDiv.style.color = 'red';
        });
}
