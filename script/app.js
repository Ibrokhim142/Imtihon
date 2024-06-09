document.addEventListener('DOMContentLoaded', function() {
    const articlesContainer = document.getElementById('articlesContainer');
    console.log(articlesContainer); 
    fetch('https://blogpost-server-production-d92d.up.railway.app/api/v1/blogs')
        .then(response => response.json())
        .then(data => {
            console.log(data.data)
            data.data.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.classList.add('article');
                articleElement.innerHTML = `
               
                    <div classa="article">
                    <a href="..//pages/index5.html">
                    <img src="${article.image }" alt="${article.title}">
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <strong>${article.tag}</strong>
                    </a>
                    </div>
                  
                `;
                articlesContainer.appendChild(articleElement);
            });
        })
        .catch(error => {
            console.error('Error fetching articles:', error);
            articlesContainer.innerHTML = '<p>Error fetching articles. Please try again later.</p>';
        });
});
function click(id) {
    console.log("hello");
}

const card = document.querySelector('.article');

card.addEventListener('click', () => {
    console.log('hello')
})