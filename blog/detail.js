var data=localStorage.data?JSON.parse(localStorage.data):[];

function getQueryString(name){
    var str=location.search.substring(1);
    var arr=str.split("&");
    var obj={}
    for(var i=0;i<arr.length;i++){
        var key=arr[i].split("=")[0];
        var val=arr[i].split("=")[1]
        obj[key]=val;
    }
    if(name){
        return obj[name]
    } else{
        return obj;
    }
}
let id = getQueryString('id')
// var edit=document.getElementById('edit');
// function jump(){
//     window.open("editPage.html?id="+id);
// }
// edit.onclick=jump;

function render(article,key){
    var article1=document.getElementById('article');
    key=id;
    article1.innerHTML=`
    <div class="article-head">
    <div class="date">${article.createTime}</div>
    <div class="article-title">${article.title}</div>
    </div>
    <div class="article-content">
    <p>
    ${article.content}
    </p>
    <a href="editPage.html?id=${key}" ><input type="button" id="edit" class="edit" value="编辑"> </a>
</div> `

}
render(data[id])
// function render(){
//     var article=document.getElementById('article');
//     var edit=document.getElementById('edit');
//     article.innerHTML=`
//     <div class="article-head">
//     <div class="date">${data.createTime}</div>
//     <div class="article-title">${data.title}</div>
// </div>
// <div class="article-content">
//     <p>
//     ${data.content}
//     </p>
// </div> `
// edit.onclick=function(){
//     window.open("editPage.html");
//     }
// }
// render()