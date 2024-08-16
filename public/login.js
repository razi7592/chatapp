document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = {
        'havefun': 'letsgo',
        'cristiano': 'ronaldo'
    };

    if (users[username] && users[username] === password) {
        localStorage.setItem('username', username);
        window.location.href = 'chat.html';
    } else {
        alert('Invalid credentials');
    }
});
