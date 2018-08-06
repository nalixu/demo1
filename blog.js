var initData=localStorage.data ? JSON.parse(localStorage.data) : [];
// var current=new Date();
// var currentDate=current.getFullYear()+'-'+(current.getMonth()+1<10? '0'+(current.getMonth()+1):current.getMonth()+1)+'-'+current.getDate()+' '+current.getHours()+':'+current.getMinutes()+':'+current.getSeconds();

var submit=document.getElementById('submit');
var title=document.getElementById('title');
var content=document.getElementById('content');
// function getValue(){
//     if(event.key==="Enter"){
//          initData.push({
//         id:initData.length,
//         title:title.value,
//         content:content.value
//     })
//     localStorage.setItem('title',initData.title);
//     localStorage.setItem('content',initData.content);
//     console.log(localStorage.title);
//     console.log(localStorage.content);
// }
   
//    localStorage.setItem('title',initData.title);
//    localStorage.setItem('content',initData.content);
// }
function getValue1(){
    var current=new Date();
    var currentDate=current.getFullYear()+'-'+(current.getMonth()+1<10? '0'+(current.getMonth()+1):current.getMonth()+1)+'-'+current.getDate()+' '+current.getHours()+':'+current.getMinutes()+':'+current.getSeconds();
    var record = {
        // role:"",
        title:title.value,
        content:content.value,
        createTime:currentDate
    }
    
    initData.push(record);
    title.value=''
    content.value=''
    // currentDate=''
    // return record
}
document.getElementById('resite').onclick=function(){
    title.value=''
    content.value=''
}
function jump(){
    

    getValue1()
  
    localStorage.data=JSON.stringify(initData)
    window.open("log.html");
   
}
submit.onclick=jump;
