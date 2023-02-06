const SERVER_URL = 'http://127.0.0.1:8000';
const title = document.querySelector('#title');
const content = document.querySelector('#content');

const getArticle = async (id) => {
    let response = await fetch(`${SERVER_URL}/blog/article/${id}`);
    return await response.json();
}

const showArticle = async (id) => {
    let article = await getArticle(id);
    
    title.value = article.title;
    content.value = article.content;
    title.parentElement.id = id; // title.parentElement = div
}

showArticle(8);

const putArticle = async (event) => {
    let id = event.target.previousElementSibling.id;

    let article = {
        'title': title.value,
        'content': content.value,
    }

    let response = await fetch(`${SERVER_URL}/blog/article/${id}`, {
        method: 'PUT',
        body: JSON.stringify(article),
        headers: {
            'Content-type': 'application/json',
        }
    })

    console.log(response.status);
    console.log(await response.json());
}