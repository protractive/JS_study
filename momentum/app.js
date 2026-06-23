const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // string만 담고 있는 변수는 대문자로 작성하는 것이 관례

function onLoginSubmit(event) {
    event.preventDefault(); // 브라우저의 기본 동작을 막아줌 예를 들어 새로고침이 일어나지 않도록 막아줌
    loginForm.classList.add(HIDDEN_CLASSNAME); // form 숨기기
    const username = loginInput.value; // input value 가져오기
    localStorage.setItem("username", username); // localStorage에 username 저장
    greeting.innerText = `Hello ${username}`; // greeting에 input value 넣기
    greeting.classList.remove(HIDDEN_CLASSNAME); // greeting 보이기
}

loginForm.addEventListener("submit", onLoginSubmit); // submit 이벤트가 발생하면 onLoginSubmit 함수 실행