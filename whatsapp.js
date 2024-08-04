document.getElementById('sendDataButton').addEventListener('click', function() {
    const contactName = 'Darshan'; // Replace with the name you want
    const messageContent = encodeURIComponent(document.getElementById('messageContent').value);
    
    if (messageContent.trim() === '') {
        alert('Please enter a message before sending.');
        return;
    }
    
    const whatsappMessage = `Hello ${contactName},%0A%0A${messageContent}`;
    const whatsappURL = `https://api.whatsapp.com/send?text=${whatsappMessage}`;
    
    window.open(whatsappURL, '_blank');
});

document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const previewImage = document.getElementById('previewImage');
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            previewImage.src = e.target.result;
            previewImage.style.display = 'block';
        };
        
        reader.readAsDataURL(file);
    } else {
        previewImage.src = '';
        previewImage.style.display = 'none';
    }
});
