var username=document.getElementById('username');
var password=document.getElementById('password');
var submitBtn=document.getElementById('submit');
var register=document.getElementById('register');
var dataArr=localStorage.user?JSON.parse(localStorage.user):[]
function submitLogin(){
    let u=dataArr.find(item=>item.username===username.value);
    if(u&&u.password==password.value){
        sessionStorage.username=username.value;
        window.open("afterLogin.html");
        window.close();
    }else{
        alert("用户名或密码错误");
    }
}
submitBtn.onclick=submitLogin;
register.onclick=function(){
    window.open("register.html");
    window.close();
}