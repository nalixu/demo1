// save localStorage
// var initlog=localStorage.data?JSON.parse(localStorage.data):[]
var username = document.getElementById('username');
var password = document.getElementById('password');
var submitBtn = document.getElementById('submit');
var register=document.getElementById('register');
submitBtn.onclick = function () {
    // localStorage.setItem("user", '[{"id":0,"name":"admin","password":"1"},{"id":1,"name":"1","password":"1"},{"id":2,"name":"2","password":"2"}]');
    // var dataString = localStorage.getItem('user');
    // var dataArr = JSON.parse(dataString);
    var dataArr=JSON.parse(localStorage.registerData);
    let u = dataArr.find(item => item.username === username.value);
    if (u && u.password == password.value) {
        sessionStorage.username = username.value;
        window.open("index.html");
        window.close();
    } else {
        alert("用户名或密码错误！");
    }

}
register.onclick=function(){
    window.open("register.html");
    window.close();
}
// sessionStorage.setItem("user", '[{"id":0,"name":"admin","password":"1"},{"id":1,"name":"1","password":"1"},{"id":2,"name":"2","password":"2"}]');
// var dataString = localStorage.getItem('user');
// var dataArr = JSON.parse(dataString);