
var data = localStorage.data ? JSON.parse(localStorage.data) : [];
function render(data){
    var content = document.getElementById('content');
    document.getElementById('container').remove();
    var imgSrc = ['./img/1.jpg', './img/2.jpg', './img/3.jpg']
   var articleContainer=document.createElement('div');
   articleContainer.id="container"
    data.forEach((val,key) => {
        var article = document.createElement('div');
        article.className="divStyle";
        // article.className=item;
        // if(document.getElementById('study').textContent===val.style){
            article.innerHTML =`
            <div class="blogpic">
                <img src=${val.image ||imgSrc[0]} alt="img">
            </div>
                <h3 class="blogtitle">
                  <a href="detail.html?id=${key}">${val.title}</a>
               </h3>
               <div class="dataAndStyle">
                    <div class="leftData">${val.createTime}</div>
                    <div class="rightStyle">${val.style}</div>
               </div>
              <div class="bloginfo">
                     <p>
                         ${val.content}
                     </p>
               </div>
                <div class="readmore">
                      <a href="detail.html?id=${key}">阅读全文</a>
                  </div>
               `
        // }
        
        articleContainer.append(article);
        
    });
    content.append(articleContainer)
}
function onChangeCategroy(e){
    let value = e.target.innerHTML;
   let list =  data.filter(item=>item.style === value)
   render(list)
}

let h5 = document.getElementsByTagName('h5');
for(let i=0;i<h5.length;i++){
    h5[i].addEventListener('click',onChangeCategroy)
}
render(data);
// style select
var drop=document.getElementById('drop_content');
var style=document.getElementById('style');
// style.onclick=function(){
//     drop.className="show"
// }
style.onmouseover=function(){
    drop.className="show"
}
style.onmouseout=function(){
    drop.className="hidden"
}

