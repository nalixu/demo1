var data=localStorage.data?JSON.parse(localStorage.data):[];
function render(){
    var content=document.getElementById('content');
    data.forEach((Val,key)=> {
        var article=document.createElement('div');
        article.innerHTML=`<div class="article">
           <div class="article-head">
             <div class="date">${val.createTime}</div>
            <div class="article-title">${val.title}</div>
         </div>
         <div class="article-content">
          <p>
            ${val.content}
      
           </p>
            <a href="detail.html?id=${key}" class="more-link">Continue reading...</a>
          </div> 
        </div>`
        content.append(article);
    });
}
render();