const SERVER_URL = 'http://127.0.0.1:8000'

const register = async(user) => {
  let response = await fetch(`${SERVER_URL}/user/register`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // 백엔드에서 set-cookie 를 허용
  });
  let data = await response.json();
  return data;
}

const login = async(user) => {
  let response = await fetch(`${SERVER_URL}/user/login`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // 백엔드에서 set-cookie 를 허용
  });
  let data = await response.json();
  return data;
}

const submitRegister = async () => {
    let user = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      fullname: document.getElementById('fullname').value,
    }
    let result = await register(user);
    console.log(result);
  }
  
const submitLogin = async () => {
    let user = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    }
    let result = await login(user);
    console.log(result); // {user: {…}, access_token: 'eyJh...wEzluRGNSmAyBo'}

    if(result.access_token) {
        // 로그인 하는 순간 access_token이 브라우저(쿠키)에 저장
        // 필요할 때마다 해당 access_token을 가지고 와서 사용할 수 있다!
        setCookie('access_token', result.access_token);
    }
}
  
function setCookie(name, value) {
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; path=/";
    document.cookie = updatedCookie;
}