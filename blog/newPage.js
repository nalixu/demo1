var initData=localStorage.data?JSON.parse(localStorage.data):[];
var title=document.getElementById('title');
var content=document.getElementById('content');
var submit=document.getElementById('submit');
var current=new Date();
var createTime=current.getFullYear()+'-'+(current.getMonth+1<10?'0'+(current.getMonth()+1):current.getMonth()+1)+current.getDate();

function getValue(){
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
}
submit.onclick=jump
