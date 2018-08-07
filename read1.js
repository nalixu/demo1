var data=localStorage.data?JSON.parse(localStorage.data):[];
var returnBtn=document.getElementById('returnBtn');
var role=sessionStorage.role && sessionStorage.role==="admin"?true:false;
if(!role){
    document.getElementById('returnBtn').style.display="none"
}
function render(){
    var read=document.getElementById('read');
    document.getElementById('list').remove();
    var list=document.createElement('ul');
    list.id="list";
    data.forEach((val,key) => {
        var item=document.createElement('li');
        item.className="li_item"
        // item.innerHTML=val.title;
        
        item.innerHTML=`<p class="title">${val.title}</p>
        <p class="introduction">${val.content}</p>
        <p class="date">${val.createTime}</p>`
        list.append(item)
        item.onclick=function(){
            window.open("detail.html?id="+key);
        }
    });
    read.append(list);
}
render();