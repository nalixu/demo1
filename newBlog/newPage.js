var initData=localStorage.data?JSON.parse(localStorage.data):[];
var title=document.getElementById('title');
var content=document.getElementById('content');
var submit=document.getElementById('submit');
var resite=document.getElementById('resite');

function getValue(){
var current=new Date();
var createTime=current.getFullYear()+'-'+(current.getMonth+1<10?'0'+(current.getMonth()+1):current.getMonth()+1)+'-'+current.getDate();
    var record={
        title:title.value,
        content:content.value,
        createTime:createTime
    }
    initData.push(record);
}
function jump(){
    getValue();
    localStorage.data=JSON.stringify(initData);
    window.open("index.html");
    window.close();
}
submit.onclick=jump
//todo:new obj then push array,before save in localStorage change array to JSON
//init array if have data then parse json and save data to localStorage
resite.onclick=function(){
    title.value='';
    content.value='';
}

function checkSomething(){
    // var initUser=sessionStorage.user?JSON.parse(sessionStorage.user):[];
   
    if(!sessionStorage.username){
        window.open("login.html");
        window.close();
    }
}
if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",checkSomething)
}else{
    checkSomething();
}