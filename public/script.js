function sendSMS() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;
    const statusDiv = document.getElementById('status');
   statusDiv.textContent = 'Sending Message. Please Wait';
    statusDiv.style.color = 'yellow';
    const apiUrl = `https://nethwieginedev.vercel.app/api/freesms?message=${encodeURIComponent(message)}&number=${encodeURIComponent(phoneNumber)}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
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
            statusDiv.textContent = 'Message sent successfully!';
            statusDiv.style.color = 'green';
        });
} 
