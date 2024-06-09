document.getElementById('createPostButton').addEventListener('click', async function(event) {
    event.preventDefault();
    const title = document.getElementById('postTitle').value;
    const image = document.getElementById('postImage').value;
    const tag = document.getElementById('postTag').value;
    const tagCheckbox = document.getElementById('postTagCheckbox').checked;
    const description = document.getElementById('postDescription').value;
    const loadingElement = document.getElementById('loading');
    const resultElement = document.getElementById('result');
    loadingElement.classList.remove('hidden');
    resultElement.textContent = '';
    try {
        const response = await fetch('https://blogpost-server-production-d92d.up.railway.app/api/v1/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, image, tag, description, tagCheckbox })
        });
        const result = await response.json();
        if (response.ok) {
            resultElement.textContent = 'Post created successfully!';
            document.getElementById('postTitle').value = '';
            document.getElementById('postImage').value = '';
            document.getElementById('postTag').value = '';
            document.getElementById('postTagCheckbox').checked = false;
            document.getElementById('postDescription').value = '';
        } else {
            resultElement.textContent = 'Post creation failed: ' + (result.message || 'Unknown error');
        }
    } catch (error) {
        resultElement.textContent = 'Post creation failed: ' + error.message;
    } finally {
        loadingElement.classList.add('hidden');
    }
});

