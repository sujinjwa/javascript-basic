fetch('https://jsonplaceholder.typicode.com/posts').then(result => {
    return result.json();
    // json 형태의 데이터 부분만 뽑아준다
}).then(data => {
    // console.log(data);
})

// 업로드하고자 하는 글
let post = {
    title: '안녕!!',
    body: '내용이야',
}

async function pushPosts(post) { // post = 사용자로부터 받은 post 데이터
    // await : 응답이 올 때까지 기다린다
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(post), // 작성한 글 들어감, json 형태로 변환
        headers: {
            'Content-type': 'application/json',
        }

    });
    let data = await response.json();
}

pushPosts(post);

async function updatePosts(post, id) { // post = 사용자로부터 받은 post 데이터
    // await : 응답이 올 때까지 기다린다
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify(post), // 작성한 글 들어감, json 형태로 변환
        headers: {
            'Content-type': 'application/json',
        }

    });
    let data = await response.json();
}

updatePosts(post, 1);

async function deletePosts(post, id) { // post = 사용자로부터 받은 post 데이터
    // await : 응답이 올 때까지 기다린다
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
        body: JSON.stringify(post), // 작성한 글 들어감, json 형태로 변환
        headers: {
            'Content-type': 'application/json',
        }

    });
    let data = await response.json();
}

deletePosts(post, 1);

// 데이터 가져와서 html에 보여주기
async function getPost(id) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let data = await response.json();
    return data;
}

// 옛날 방식
// getPost(1).then(data => {
//     let title = document.querySelector('#title');
//     title.innerText = data.title;

//     let body = document.querySelector('#body');
//     body.innerText = data.body;
// })

// 최신 방식
async function insertPost(id) {
    let data = await getPost(id);
    let title = document.querySelector('#title');
    title.innerText = data.title;

    let body = document.querySelector('#body');
    body.innerText = data.body;
}

