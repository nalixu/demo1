var data=localStorage.data?JSON.parse(localStorage.data):[];
function getQueryString(name){
    var str=location.search.substring(1);
    var arr=str.split('&');
    var obj={};
    for(var i=0;i<arr.length;i++){
        var key=arr[i].split('=')[0];
        var val=arr[i].split('=')[1];
        obj[key]=val;
    }
    if(name){
        return obj[name];
    }else{
        return obj;
    }
}
let id=getQueryString('id')
function render(article,key){
    var con=document.querySelector('.con');
    con.innerHTML=`
        <div class="title">${data[id].title}</div>
        <div>${data[id].content}</div>
    `
}
render(data[id],id);