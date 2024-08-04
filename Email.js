document.getElementById('headerImage').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const img = document.getElementById('headerImagePreview');
        img.src = e.target.result;
        img.style.display = 'block';
    }
    
    if (file) {
        reader.readAsDataURL(file);
    }
});

document.getElementById('sendData').addEventListener('click', function() {
    alert('Data sent successfully!');
});
