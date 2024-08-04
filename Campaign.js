document.getElementById('emailButton').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Email button clicked');
    window.location.href = 'Email.html';
});

document.getElementById('whatsappButton').addEventListener('click', function(event) {
    event.preventDefault();
    alert('WhatsApp button clicked');
    window.location.href = 'Whatsapp.html';
});

document.getElementById('smsButton').addEventListener('click', function(event) {
    event.preventDefault();
    alert('SMS button clicked');
    window.location.href = 'sms.html';
});
