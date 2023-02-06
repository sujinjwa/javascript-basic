const post = document.querySelector('#post');

async function getPost() {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    if (response.ok) {
      let data = await response.json(); // 여기도 꼭 await 를 해주어야 함
      return data;
    }
    return new Error(response.status + '에러 발생'); // 
  }
  
  async function showPosts() {
    try {
        let data = await getPost();
        
      for(let i=0; i<data.length; i++) {
        post.insertAdjacentHTML('beforeend', `
                            <h1 id="title">${data[i].title}</h1>
                            <p id="body">${data[i].body}</p>
                            <button onclick="deletePost(${i + 1})">삭제하기</button>
                            `);      
        }
        // for문 대신 forEach로 구현

    } catch(err) {
      console.log(err); // try 절 (await 절 포함) 에서 발생한 에러 처리
    }
  }

  async function deletePost(id) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
      method: 'DELETE',
    });
    let data = await response.json();
    console.log(data);
    // return response.status
  }

  showPosts();
  
  // deletePost(1);

// async function clickDeleteBtn() {
//     await showPosts();
//     let deleteBtn = document.querySelectorAll('button');

//     for(let i=0; i<deleteBtn.length; i++) {
//         deleteBtn[i].addEventListener('click', deletePost);
//     }
// }

// clickDeleteBtn();