const SERVER_URL = 'http://127.0.0.1:8000'

const postArticle = async (article) => {
    let token = getCookie('access_token'); // 쿠키로부터 access_token 가져온다
    let response = await fetch(`${SERVER_URL}/blog/article`, {
        method: 'POST',
        body: article,
        headers: {
            'Authorization': `Bearer ${token}` // 내가 누구인지에 대한 정보 포함해서 POST 요청
        }
    })

    return await response.json();
}

const submitArticle = async () => {
    let form = document.querySelector('#form');
    let formData = new FormData(form);
    let result = await postArticle(formData);
    console.log(result);
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}