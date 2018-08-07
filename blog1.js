var initData=localStorage.data?JSON.parse(localStorage.data):[]
var submit=document.getElementById('submit');
var title=document.getElementById('title');
var content=document.getElementById('content');
function getValue(){
    var current=new Date();
    var currentDate=current.getFullYear()+'-'+(current.getMonth()+1<10? '0'+(current.getMonth()+1):current.getMonth()+1)+'-'+current.getDate()+' '+current.getHours()+':'+current.getMinutes()+':'+current.getSeconds();
    var record={
        title:title.value,
        content:content.value,
        createTime:currentDate
    }
    initData.push(record);
    title.value='';
    content.value=''
    
}
function jump(){
    getValue();
    localStorage.data=JSON.stringify(initData);
    window.open("log.html")
}
submit.onclick=jump;