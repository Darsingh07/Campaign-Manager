document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    // Get the value entered in the password field
    var passwordInput = document.getElementById('password').value;
    
    // Check if the entered password is correct
    if (passwordInput !== 'lgcampaign') {
        alert('Password is wrong');
        return; // Exit the function if password is wrong
    }
    
    // If password is correct, show login successful alert and redirect
    alert('Login successful');
    console.log('Form submitted!');
    window.location.href = 'Campaign.html';
});
