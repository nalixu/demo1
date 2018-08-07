var data=localStorage.data ? JSON.parse(localStorage.data) : [];
function openPage(){
    window.open("detail.html");
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
      <a href="#" class="more-link" onclick="openPage()">Continue reading...</a>
  </div>`
  content.append(article);
    });
   
}
render();