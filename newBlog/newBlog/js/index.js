var categoriesHidden=document.getElementById('categoriesHidden');
var category=document.getElementById('category');
// 鼠标点击探出菜单阻止冒泡
category.addEventListener('click',function(e){
    categoriesHidden.className="subnav";
    categoriesHidden.classList.add('subnav');
    e.stopPropagation();
},false);
categoriesHidden.addEventListener('click',function(e){
    e.stopPropagation();
},false);
// 鼠标点击其他地方隐藏
document.addEventListener('click',function(){
    categoriesHidden.className='categoriesHidden';
},false);
// 列表部分
var data=localStorage.data?JSON.parse(localStorage.data):[];
function render(){
    var main=document.querySelector('main');
    var container=document.querySelector('.container');
    container.remove();
    var articleContainer=document.createElement('div');
    articleContainer.className="container";
    data.forEach((val,key) => {
        var article=document.createElement('div');
        article.className="article";
        article.innerHTML=`
        <div class="image">
            <img src="./img/111.jpg" alt="1">
        </div>
        <div class="content">
            <div class="titile"><p title="Sources of Free High-Definition Stock Videoddddddddddddddssssdddssssss"><a> Sources of Free High-Definition Stock Videoddddddddddddddssssdddsssssssd</a></p></div>
            <div class="note">
                <span class="author">By <a class="authorName">ENDA STOKES BARRON</a></span>
                <span class="date"> AUGUST 23RD, 2018</span>
                <span class="type"><a>FREEBIES</a></span>
            </div>
            <div class="contentText">
                <p>pStock footage: You can use it in your projects, 
                video backgrounds, or even in the header to welcome people to your website
                 – among other uses. The problem? Video production2222222222222222222222222222222222222222ddddddddddddddsssssssssddddddddddsdsd
                 </p>
            </div>
        </div>
    `
    });
}