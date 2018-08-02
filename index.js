var initData=[];
// 初始化日期
var current=new Date();
var currentDate=current.getFullYear() + '-'+ (current.getMonth()+1<10? '0'+(current.getMonth()+1):current.getMonth()+1)+'-'+current.getDate()+'   '+current.getHours()+':'+current.getMinutes()+':'+current.getSeconds();
var content=document.getElementById('content');
function getValue(){
    if(event.key==="Enter"){
        initData.push({
            date:currentDate,
            text:content.value
        })
        content.value=''
    }
    renderList();
}
var replyBtn=document.getElementById('btn');
function reply(){
    // console.log(1);
    initData.push({
        date:currentDate,
        text:content.value
    })
    content.value=''
    renderList();

}
// console.log(btn);
btn.onclick=reply;

function renderList(){
    var showContent=document.querySelector('.showContent');
    var date=document.querySelector('.date');
    var textContent=document.querySelector('.textContent');
    
    document.getElementById('list').remove();
    var list=document.createElement('div');
    list.id="list";
    initData.forEach(val=>{
        var item=document.createElement('p');       
        item.innerHTML=val.date+' '+val.text;
       list.append(item);    
    })
    showContent.append(list);

}