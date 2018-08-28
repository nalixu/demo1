var data=localStorage.data?JSON.parse(localStorage.data):[];
var title=document.querySelector('.editTitle');
var submit=document.querySelector('.submit');
var imgSrc = ['./img/1.jpg', 'http://img02.tooopen.com/images/20160509/tooopen_sy_161967094653.jpg', './img/3.jpg','http://seopic.699pic.com/photo/00026/7248.jpg_wh1200.jpg','http://t2.hddhhn.com/uploads/tu/201606/32/n3uuqssg2ks.jpg','http://t2.hddhhn.com/uploads/tu/201606/32/ywdfqgxr00b.jpg','http://t2.hddhhn.com/uploads/tu/201606/32/goosj3zcbj5.jpg'];
var t=Math.random()*10%7;
t=parseInt(t);
function getValue(){
    var current=new Date();
    var createTime=current.getFullYear()+'-'+(current.getMonth+1<10?'0'+(current.getMonth()+1):current.getMonth()+1)+'-'+current.getDate()
    
    var record={
        title:title.value,
        content:editor.txt.html(),
        createTime:createTime,
        image:imgSrc[t],
        type:myselect.options[myselect.selectedIndex].text
    }
    // var record = editor.txt.html();
    data.push(record);
    
}
function jump(){
    getValue();
    localStorage.data=JSON.stringify(data);
    window.open('index.html');
    window.close();
}
submit.onclick=jump;
//select
var initSelect=localStorage.selectData?JSON.parse(localStorage.selectData):[]
var myselect=document.getElementById('myselect');
var addbtn=document.getElementById('addbtn');
function getSelectValue(){
    var mytext=document.getElementById('mytext');
    initSelect.push({id:initSelect.length,name:mytext.value,label:mytext.value})
    localStorage.selectData=JSON.stringify(initSelect);
    mytext.value='';
}

function renderOption(){
    getSelectValue();
    initSelect.forEach(val => {
        var objOption=document.createElement('option');
        objOption.innerHTML=`<option value='${val.name}'>${val.label}</option>`
        myselect.append(objOption);
    });
}
addbtn.addEventListener('click',renderOption);