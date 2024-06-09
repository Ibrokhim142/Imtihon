document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const loadingElement = document.getElementById('loading');
    const resultElement = document.getElementById('result');
    loadingElement.classList.remove('hidden');
    resultElement.textContent = '';

    try {
        const response = await fetch('https://blogpost-server-production-d92d.up.railway.app/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const result = await response.json();
        if (response.ok) {
            resultElement.textContent = 'Login successful!';
        } else {
            resultElement.textContent = 'Login failed: ' + (result.message || 'Unknown error');
        }
    } catch (error) {
        resultElement.textContent = 'Login failed: ' + error.message;
    } finally {
        loadingElement.classList.add('hidden');
    }
});
