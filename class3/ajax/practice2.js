let title = document.querySelector('#title');
let body = document.querySelector('#body');

async function getPost() {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
    if (response.ok) {
      let data = await response.json(); // 여기도 꼭 await 를 해주어야 함
      return data;
    }
    return new Error(response.status + '에러 발생'); // 
  }
  
  async function showPosts() {
    try {
        let data = await getPost();

        title.value = data.title;
        body.value = data.body;
    } catch(err) {
      console.log(err); // try 절 (await 절 포함) 에서 발생한 에러 처리
    }
  }

  showPosts(1);


  async function edit() {
    let editted = {
        title: title.innerText,
        body: body.innerText,
    }
    try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`,{
            method: 'PUT',
            body: JSON.stringify(editted),
            headers: {
            'Content-type': 'application/json',
            }
        });
        let data = await response.json();
        console.log(data);
    } catch(err) {
        console.log(err);
    }
  }