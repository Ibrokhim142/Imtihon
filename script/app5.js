document.addEventListener('DOMContentLoaded', function() {
    const articlesContainer = document.getElementById('articlesContainer');
    fetch('https://blogpost-server-production-d92d.up.railway.app/api/v1/blogs')
        .then(response => response.json())
        .then(data => {
            data.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.classList.add('article');
                articleElement.innerHTML = `
                    <img src="${article.image}" alt="${article.title}">
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                `;
                articlesContainer.appendChild(articleElement);
            });
        })
        .catch(error => {
            console.error('Error fetching articles:', error);
            articlesContainer.innerHTML = '<p style="max-width: 820px; margin-left: auto; margin-right: auto">A BRIEF INTRODUCTION Medium is a blogging platform, like WordPress or Blogger. Medium is the new project from the guys who brought you Twitter. Medium is chaotically, arrhythmically produced by a combination of top-notch editors, paid writers, PR flacks, startup bros, and hacks.</p>';
        });
});
