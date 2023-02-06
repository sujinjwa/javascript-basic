const SERVER_URL = 'http://127.0.0.1:8000'

async function postImage(image) {
  let response = await fetch(`${SERVER_URL}/blog/image`,{
    method: 'POST',
    body: image // formData 그대로 명시
  });
  let data = await response.json(); // 응답을 json 객체에서 자바스크립트 객체화
  return data
}

async function submitImage() {
    let formElement = document.getElementById('form');
    let image = new FormData(formElement);
    let result = await postImage(image);
    console.log(result);
  }