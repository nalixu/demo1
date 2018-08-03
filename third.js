var initData=[];
// 日期格式
var current=new Date();
var inputText=document.getElementById('inputText');
var currentDate=current.getFullYear() + '-'+ (current.getMonth()+1<10? '0'+(current.getMonth()+1):current.getMonth()+1)+'-'+current.getDate()+'   '+current.getHours()+':'+current.getMinutes()+':'+current.getSeconds();
var sendBtn=document.getElementById('sendBtn');

function getValue(){
    if(event.key==="Enter"){
        initData.push({
            id:initData.length,
            date:currentDate,
            text:inputText.value
        })
        inputText.value='';
        // 阻止默认事件
       event.preventDefault();
       event.stopPropagation()
        renderList();
        testChange();
    }
  
   
}
// inputText.onchange=function(e){
//     console.log(e.target);
//     if(e.target.value==''){
//         sendBtn.className='sendBtn';
       
//     }
//     else{
//         sendBtn.className='afterSendbtn';
//     }
// }
function testChange(){
        // console.log(e.target);
        if(inputText.value==''){
            sendBtn.className='sendBtn';
           
        }
        else{
            sendBtn.className='afterSendbtn';
        }
    }


// document.getElementsByTagName('textarea')[0].addEventListener('change',function(){
//     console.log('change')
// },true)
// document.getElementsByTagName('textarea')[0].addEventListener('bulr',function(){
//     console.log('bulr')
// },true)
document.getElementsByTagName('textarea')[0].addEventListener('input',testChange,true);

function send(){
    initData.push({
        id:initData.length,
        date:currentDate,
        text:inputText.value
    })
    inputText.value='';  
    renderList()
    testChange()
}

sendBtn.onclick=send;
function del(id){
    
            var removeItem=initData.splice(initData.id,1);
            removeItem.className="delete";
            console.log(initData);
            // item.innerHTML=`<div class="delete">${val.date}消息撤回</div>`
            renderList();
  
}
function renderList(){
    var date=document.getElementById('date');
    var content=document.getElementById('content');
    var show=document.getElementById('show');
    document.getElementById('list').remove();
    var eleList=document.createElement('div');
    eleList.id='list';
    initData.forEach(val=>{
        var item=document.createElement('div');
        item.className="itemStyle";
        item.innerHTML=`<div class="date" id="date">${val.date}</div>
        <div class="showContent" id="showContent">
            <div class="headImage">丽娜</div>
            <div class="content" id="content"><p>${val.text}</p></div> 
            <input type="button" class="back" value="撤回" onclick="del(${val.id})" /> 
        </div>`
        eleList.append(item);
        // var back=document.createElement('input');
        // back.type="button"
        // back.value="撤回";
        // back.className="back";
        // var showContent=document.getElementById('showContent');
        // showContent.append(back);

        // item.append(back);
        //  var data=initData.slice();
    //     window.onload = function () {      
    // }

        // back.onclick=function(){
        //     var removeItem=initData.splice(val.id,1);
        //     removeItem.className="delete";
        //     item.innerHTML=`<div class="delete">${val.date}消息撤回</div>`
        // }
     
       


    })
    show.append(eleList);
}
