var data = localStorage.data ? JSON.parse(localStorage.data) : [];
function render(){
    var content = document.getElementById('content');
    data.forEach((val,key) => {
        var article = document.createElement('div');
        article.className="divStyle";
        // article.className=item;
        article.innerHTML =`
                <h3 class="blogtitle">
                  <a href="detail.html?id=${key}">${val.title}</a>
               </h3>
              <div class="bloginfo">
                     <p>
                         ${val.content}
                     </p>
               </div>
                <div class="readmore">
                      <a href="detail.html?id=${key}">阅读全文</a>
                  </div>
               `
        content.append(article);
        
    });
// 	for (let i = 0; i < data.length; i++) {
//     var article = document.createElement('div');
//     article.className="divStyle";
//     // article.className=item;
//     article.innerHTML =`
//    		 <h3 class="blogtitle">
//               <a href="detail.html?id=${i}">${data[i].title}</a>
//            </h3>
//           <div class="bloginfo">
//                  <p>
//                      ${data[i].content}
//                  </p>
//            </div>
// 			<div class="readmore">
//                   <a href="detail.html?id=${i}">阅读全文</a>
//               </div>
//            `
//     content.append(article);
//   }

}
render();
