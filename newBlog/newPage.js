var initData=localStorage.data?JSON.parse(localStorage.data):[];
var title=document.getElementById('title');
var content=document.getElementById('content');
var submit=document.getElementById('submit');
var resite=document.getElementById('resite');
var imgSrc = ['./img/1.jpg', 'http://img02.tooopen.com/images/20160509/tooopen_sy_161967094653.jpg', './img/3.jpg','http://seopic.699pic.com/photo/00026/7248.jpg_wh1200.jpg','http://t2.hddhhn.com/uploads/tu/201606/32/n3uuqssg2ks.jpg','http://t2.hddhhn.com/uploads/tu/201606/32/ywdfqgxr00b.jpg','http://t2.hddhhn.com/uploads/tu/201606/32/goosj3zcbj5.jpg']
var t = Math.random() * 10 % 3; //返回0-3随机数
t = parseInt(t);
console.log(t)
function getValue(){
var current=new Date();
var createTime=current.getFullYear()+'-'+(current.getMonth+1<10?'0'+(current.getMonth()+1):current.getMonth()+1)+'-'+current.getDate();
    var record={
        title:title.value,
        content:content.value,
        createTime:createTime,
        style:myselect.options[myselect.selectedIndex].text,
        image:imgSrc[t]
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
// select
//todo:add style
var initSelect=localStorage.selectData?JSON.parse(localStorage.selectData):[];
var myselect=document.getElementById('myselect');
var addbtn=document.getElementById('addbtn');
function getSelectValue(){
    var mytext=document.getElementById('mytext');
    initSelect.push({id:initSelect.length,name:mytext.value,label:mytext.value})
    localStorage.selectData=JSON.stringify(initSelect);
    mytext.value=''
}

//to:read
function readData(){
    getSelectValue()
   
    for(var i;i<initSelect.length;i++){
        var objOption=document.createElement('option');
        objOption.text=initSelect[i].label;
        objOption.value=initSelect[i].name;
        myselect.options.add(objOption);
    }
}

//to:render
function renderOption(){
    readData();
   
    initSelect.forEach(val => {
        var objOption=document.createElement('option');
        objOption.innerHTML=`<option value='${val.name}'>${val.label}</option>`
        myselect.append(objOption);
    });
    // for(let i;i<initSelect.length;i++){
    // var objOption=document.createElement('option');
    // objOption.innerHTML=`<option value='${initSelect[i].name}'>${initSelect[i].label}</option>`
    //     myselect.append(objOption);
    // }
}
// addbtn.onclick=renderOption;
 addbtn.addEventListener('click',renderOption)   
 
