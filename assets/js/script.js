document.getElementById('fetch-posts').addEventListener('click', async () => {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = ''; // Clear previous posts

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Error al obtener los posts');
        }
        const posts = await response.json();
        const ul = document.createElement('ul');

        posts.forEach(post => {
            const li = document.createElement('li');
            const title = document.createElement('strong');
            title.textContent = post.title;
            li.appendChild(title);

            const body = document.createElement('p');
            body.textContent = post.body;
            li.appendChild(body);

            ul.appendChild(li);
        });

        postsContainer.appendChild(ul);
    } catch (error) {
        postsContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    }
});
