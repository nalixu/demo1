
var email=document.getElementById('email');
var password=document.getElementById('password');
var submit=document.getElementById('submit');
var initData=localStorage.user?JSON.parse(localStorage.user):[];
submit.onclick=function(){
    
let u=initData.find(item=>item.email===email.value);
if(u && u.password==password.value){
    sessionStorage.email=email.value;
    window.open('index.html');
    window.close();
}else{
    alert("用户名或密码错误");
}
}