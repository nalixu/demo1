var initData=localStorage.data ? JSON.parse(localStorage.data) : [];
var submit=document.getElementById('submit');
var title=document.getElementById('title');
var content=document.getElementById('content');
function getValue1(){
    var current=new Date();
    var currentDate=current.getFullYear()+'-'+(current.getMonth()+1<10? '0'+(current.getMonth()+1):current.getMonth()+1)+'-'+current.getDate();
    var record = {
        title:title.value,
        content:content.value,
        createTime:currentDate
    }
    
    initData.push(record);
}
document.getElementById('resite').onclick=function(){
    title.value=''
    content.value=''
}
function jump(){
    getValue1()
  
    localStorage.data=JSON.stringify(initData)
    window.open("index.html");
   
}
submit.onclick=jump;