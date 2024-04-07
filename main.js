/*function changeText() {
    var paragraph = document.getElementById("demo").innerHTML="Chào mừng bạn đến với Web Basic!";
}*/

/*function changeText() {
    var paragraph=document.querySelector("p");
    paragraph.textContent="Chào mừng bạn đến với Web Basic!"
}*/

var welcome='Xin chào. Chào mừng bạn đã đến với trang web !';
alert(welcome);

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'username' && password === 'password') {
        showMessage('success', 'Đăng nhập thành công!');
    } else {
        showMessage('error', 'Tên đăng nhập hoặc mật khẩu không đúng!');
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var newUsername = document.getElementById('newUsername').value;
    showMessage('success', 'Đăng ký tài khoản thành công!');
});

function showMessage(type, message) {
    var messageDiv = document.getElementById('message');
    messageDiv.innerHTML = message;
    messageDiv.className = type;
}
