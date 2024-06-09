document.getElementById('registrationForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const loadingElement = document.getElementById('loading');
    const resultElement = document.getElementById('result');
    loadingElement.classList.remove('hidden');
    resultElement.textContent = '';

    try {
        const response = await fetch('https://blogpost-server-production-d92d.up.railway.app/api/v1/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: firstName + ' ' + lastName, email, password })
        });

        const result = await response.json();
        if (response.ok) {
            resultElement.textContent = 'Registration successful!';
        } else {
            resultElement.textContent = 'Registration failed: ' + (result.message || 'Unknown error');
        }
    } catch (error) {
        resultElement.textContent = 'Registration failed: ' + error.message;
    } finally {
        loadingElement.classList.add('hidden');
    }
});
