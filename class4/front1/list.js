const SERVER_URL = `http://127.0.0.1:8000`;

const getArticles = async () => {
    let response = await fetch(`${SERVER_URL}/blog/article`);
    return await response.json();
}

const showArticles = async () => {
    let articles = await getArticles();
    const listDiv = document.querySelector('#list');

    articles.forEach((article) => {
        listDiv.insertAdjacentHTML('afterbegin', `
                                                <div id="${article.id}">
                                                    <h1>제목: ${article.title}</h1>
                                                    <h3>내용: ${article.content}</h3>
                                                    <button onclick="deleteArticle(${article.id})">삭제</button>
                                                </div>`)
    })
}

showArticles();

const deleteArticle = async (id) => {
    let response = await fetch(`${SERVER_URL}/blog/article/${id}`, {
        method: 'DELETE',
    });

    // console.log(response.status)
    // 예외 처리 : DELETE 요청 성공했을 때만 새로고침되지 않아도 삭제되도록 설정
    if (response.status === 204) {
        let post = document.getElementById(id);
        post.remove();
    }
}