var data = localStorage.data ? JSON.parse(localStorage.data) : [];
// function openPage(){
//     window.open("detail.html");
// }
// function getQueryString(name){
//   var str=location.search.substring(1);
//   var arr=str.split("&");
//   var obj={}
//   for(var i=0;i<arr.length;i++){
//       var key=arr[i].split("=")[0];
//       var val=arr[i].split("=")[1]
//       obj[key]=val;
//   }
//   if(name){
//       return obj[name]
//   } else{
//       return obj;
//   }
// }
// let id = getQueryString('id');

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