var data=localStorage.data ? JSON.parse(localStorage.data) : [];
// function getQueryString(name) {
//     var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
//     var r = window.location.search.substr(1).match(reg);
//     if (r != null) {
//         return unescape(r[2]);

//     }
// }
// let id=getQueryString("id")
// function queryString(name){
//     var obj={}
//     //得到url上的属性和值
//     var str=location.search.substring(1);
//     var arr=str.split("&");//得到数组
//     for(var i=0;i<arr.length;i++){
//         let key= arr[i].split("=")[0];
//         let val = arr[i].split("=")[1];
//         obj[key]=val//得到对象值
       
//     }
//     return obj[name]
// }
// let id =queryString('id')
function getQueryString(name){
    var str=location.search.substring(1);
    var arr=str.split("&");
    var obj={}
    for(var i=0;i<arr.length;i++){
        var key=arr[i].split("=")[0];
        var val=arr[i].split("=")[1]
        obj[key]=val;
    }
    //若不传参整个obj输出，null,undefine判断为false
    // return name ? obj[name] : obj
    if(name){
        return obj[name]
    } else{
        return obj;
    }
    
}
let id = getQueryString('id')

function render(article){
    var read=document.getElementById('textEdit');
    read.innerHTML=`<input id="title" type="text" value="${article.title}" />
            <hr>
            <textarea id="content" name="edit" id="edit">${article.content}</textarea>`
}
// var id = location.search ? location.search.substring(1).split("=")[1] : 0;
// let id =queryString('id')
render(data[id])
//递归
// function f(n){
    
// if(n%2==0&&n!==0){if(n==2) return 2;else return n*f(n-2) } ;
// if(n%2!==0){if(n==1) return 1;else return n+f(n-2)}
// }
