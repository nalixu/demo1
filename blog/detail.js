var data=localStorage.data?JSON.parse(localStorage.data):[];
var edit=document.getElementById('edit');
function openPage(){
    window.open("editPage.html");
}
function render(){
    var content=document.getElementById('content');
 //    var contentList=document.createElement('div')
 //    contentList.id="content";
 
     data.forEach((val,key) => {
       var article=document.getElementById('article');
       article.innerHTML=
       `<div class="article-head">
       <div class="date">${val.createTime}</div>
       <div class="article-title">${val.title}</div>
   </div>
   <div class="article-content">
       <p>
       ${val.content}
       </p>
   </div>`
   content.append(article);
     });
  edit.onclick=openPage;
 }
 render();