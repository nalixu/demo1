var password=document.getElementById('password');
var name=document.getElementById('name');
var email=document.getElementById('email');
var submit=document.getElementById('submit');
var initData=localStorage.user?JSON.parse(localStorage.user):[];
function saveData(){
    var record={
        username:name.value,
        email:email.value,
        password:password.value
    }
    initData.push(record);
    localStorage.user=JSON.stringify(initData);
    alert('注册成功');
    window.open('login.html');
    window.close()
}
submit.onclick=saveData;