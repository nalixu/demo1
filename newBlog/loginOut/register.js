var password=document.getElementById('password');
var repassword=document.getElementById('repassword');
var username=document.getElementById('username');
var submit=document.getElementById('submit');
var initData=localStorage.user?JSON.parse(localStorage.user):[];
function ifPwdEmpty(){
    var pwd=document.getElementsByTagName('input');
    for(var i=0;i<pwd.length;i++){
        if(pwd[i].type=='password'&&pwd[i].value==0){
            alert('请输入密码');
            pwd[i].focus();
        }
    }
    if(password.value!=repassword.value){
        alert("输入密码不一致，请重新输入！");
        repasswourd.value="";
        repasswourd.focus();
    }
}
function saveData(){
    ifPwdEmpty();
    var record={
        username:username.value,
        password:password.value,
        repassword:repassword.value
    }
initData.push(record);
localStorage.user=JSON.stringify(initData);
alert('注册成功');
window.open('login.html');
window.close();
}
submit.onclick=saveData;