function sendSMS() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;
    const statusDiv = document.getElementById('status');

    const apiUrl = `https://api-freesms.replit.app/send_sms?number=${encodeURIComponent(phoneNumber)}&message=${encodeURIComponent(message)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log('API response:', data);
            statusDiv.textContent = 'Message sent successfully!';
            statusDiv.style.color = 'green';
        })
        .catch(error => {
            console.error('Error sending message:', error);
            statusDiv.textContent = 'Failed to send message. Please try again.';
            statusDiv.style.color = 'red';
        });
}
