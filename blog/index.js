var data = localStorage.data ? JSON.parse(localStorage.data) : [];
function render() {
  var content = document.getElementById('content');
  // data.forEach((val, key) => {
  //   var article = document.createElement('div')
  //   article.innerHTML = `<div class="article">
  //      <div class="article-head">
  //         <div class="date">${val.createTime}</div>
  //         <div class="article-title">${val.title}</div>
  //     </div>
  //     <div class="article-content">
  //         <p>
  //         ${val.content}

  //         </p>
  //         <a href="detail.html?id=${key}" class="more-link">Continue reading...</a>
  //     </div> 
  //  </div>`
  // content.append(article);
  // });

  for (let i = 0; i < data.length; i++) {
    var article = document.createElement('div')
    article.innerHTML = `<div class="article">
     <div class="article-head">
        <div class="date">${data[i].createTime}</div>
        <div class="article-title">${data[i].title}</div>
    </div>
    <div class="article-content">
        <p>
        ${data[i].content}
       
        </p>
        <a href="detail.html?id=${i}" class="more-link">Continue reading...</a>
    </div> 
 </div>`
    content.append(article);
  }

}
render();
//this is a list page,first init data about localStorage,then render use for/map/forEach to append item
//ps:if create div to push item,the div should be created in loop(for/map/forEach)