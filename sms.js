document.getElementById('sendData').addEventListener('click', function() {
    const messageContent = document.getElementById('messageContent').value;
    if (messageContent.trim() === '') {
        alert('Please enter a message before sending.');
    } else {
        alert('Message sent successfully!');
        // Add additional code here to handle form submission or data processing
    }
});
