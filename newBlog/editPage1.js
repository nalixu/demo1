var initData=localStorage.data?JSON.parse(localStorage.data):[];
var submit=document.getElementById('submit');
function getQueryString(name){
    var str=location.search.substring(1);
    var arr=str.split("&");
    var obj={};
    for(var i=0;i<arr.length;i++){
        var key=arr[i].split("=")[0];
        var val=arr[i].split("=")[1];
        obj[key]=val;
    }
    if(name){
        return obj[name]
    }else{
        return obj
    }
}
let id=getQueryString('id');
function jump(){
    var title=document.getElementById('title');
    var content=document.getElementById('content');
    var current=new Date();
    var currentDate=current.getFullYear()+'-'+(current.getMonth()+1<10? '0'+(current.getMonth()+1):current.getMonth()+1)+'-'+current.getDate();
    var title=title.value;
    var title = title.value;
    var content=content.value;
    var createTime =currentDate;  
    initData[id]={title,content,createTime};
    localStorage.data=JSON.stringify(initData);
    window.open("index.html");
}
submit.onclick=jump;
function render(article){
    var textEdit=document.getElementById('textEdit');
    textEdit.innerHTML=`
    <input id="title" type="text" value="${article.title}"/>
    <hr>
    <textarea id="content" name="edit" id="edit">${article.content}</textarea> `
}
render(initData[id]);