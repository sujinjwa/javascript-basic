const SERVER_URL = 'http://127.0.0.1:8000'

const postArticle = async (article) => {
    let response = await fetch(`${SERVER_URL}/blog/article`, {
        method: 'POST',
        body: article,
    })

    return await response.json();
}

const submitArticle = async () => {
    let form = document.querySelector('#form');
    let formData = new FormData(form);
    let result = await postArticle(formData);
    console.log(result);
}
