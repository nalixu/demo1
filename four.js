var initData=[];
var current=new Date();
var currentDate=current.getFullYear()+'-'+(current.getMonth()+1<10? '0'+(current.getMonth()+1):current.getMonth()+1)+'-'+current.getDate()+' '+current.getHours()+':'+current.getMinutes()+':'+current.getSeconds();
var inputText=document.getElementById('inputText');
var sendBtn=document.getElementById('sendBtn');
function getValue(){
    if(event.key==="Enter"){
        initData.push({
            id:initData.length,
            date:currentDate,
            text:inputText.value
        })
        inputText.value="";
        event.preventDefault();
        event.stopPropagation();
        renderList();
        testChange();
    }
}
function testChange(){
    if(inputText.value==''){
        sendBtn.className='sendBtn';
    }
    else{
        sendBtn.className='afterSendbtn'
    }
}
// 当文本框内有输入按钮变化
document.getElementsByTagName('textarea')[0].addEventListener('input',testChange,true);
function send(){
    initData.push({
        id:initData.length,
        date:currentDate,
        text:inputText.value
    })
    inputText.value="";
    renderList();
    testChange();
}
sendBtn.onclick=send;
function del(id){
    var removeItem=initData.splice(initData.id,1);
    removeItem.className="delete";
    renderList();
}
function renderList(){
    var date=document.getElementById('date');
    var content=document.getElementById('content');
    var show=document.getElementById('show');
    document.getElementById('list').remove();
    var eleByList=document.createElement('div');
    eleByList.id='list';
    initData.forEach(val=>{
        // 创造出来的都是在内存中要先去出来
        var item=document.createElement('div');
        item.className="itemStyle";
        item.innerHTMl=`<div class="date" id="date">${val.date}</div>
        <div class="showContent" id="showContent">
            <div class="headImage">lina</div>
            <div class="content" id="content"><p>${val.text}</p></div>
            <input type="button" class="back" value="chehiu" onclick="del(${val.id})" />

        </div>`
        eleByList.append(item);
    })
    show.append(eleByList);
}