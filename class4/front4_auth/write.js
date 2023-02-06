const SERVER_URL = 'http://127.0.0.1:8000'

// method 명 + table 명
async function postArticle(article) {
    let response = await fetch(`${SERVER_URL}/blog/article`, {
        method: 'POST',
        body: JSON.stringify(article),
        headers: {
            'Content-type': 'application/json',
        },
    });
    let data = await response.json();
    return data
}

async function submitArticle() {
    let article = {
        title: document.getElementById('title').value,
        content: document.getElementById('content').value,
    }
    let result = await postArticle(article);
    console.log(result);
}