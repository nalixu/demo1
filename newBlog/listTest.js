var imgSrc = ['./img/1.jpg', './img/2.jpg', './img/3.jpg']
var t = Math.random() * 10 % 3; //返回0-3随机数
t = parseInt(t);
var data = localStorage.data ? JSON.parse(localStorage.data) : [];
function render() {
    var content = document.getElementById('content');
    data.forEach((val, key) => {
        var article = document.createElement('div');
        article.className = "divStyle";
        // article.className=item;
        article.innerHTML = `
            <div class="blogpic">
                <img src="${imgSrc[t]}" alt="img">
            </div>
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
}
render();