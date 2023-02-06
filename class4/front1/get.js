const SERVER_URL = 'http://127.0.0.1:8000'

async function getArticle(id) {
    let response = await fetch(`${SERVER_URL}/blog/article/${id}`);
    let data = await response.json();
    return data
}

async function insertArticle(id) {
    let data = await getArticle(id);

    let title = document.querySelector('#title');
    let content = document.querySelector('#content');

    title.innerText = data.title;
    content.innerText = data.content;
}

insertArticle(8);
// insertArticle(2);
// insertArticle(3);
// insertArticle(4);