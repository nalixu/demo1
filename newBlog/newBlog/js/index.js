var data=localStorage.data?JSON.parse(localStorage.data):[];
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

function render(data){
    var container=document.querySelector('.container');
    // var article=document.querySelector('.article');
   document.getElementById('blog').remove();
   var blog=document.createElement('blog');
   blog.id='blog';
    data.forEach((val,key)=>{     
        var blogText=document.createElement('div');
        blogText.className='blogText';
        blogText.innerHTML=` <div class="image">
        <img src="${val.image}" alt="1">
    </div>
    <div class="content">
        <div class="titile"><p><a href='detail.html?id=${key}'>${val.title}</a></p></div>
        <div class="note">
            <span class="author">By <a class="authorName">ENDA STOKES BARRON</a></span>
            <span class="date">${val.createTime}</span>
            <span class="type"><a href="typePage.html?type=${val.type}">${val.type}</a></span>
        </div>
        <div class="contentText">
            ${val.content}
        </div>
    </div>`
    blog.append(blogText)
    })
    container.append(blog);
}
render(data);
//nav sublist
function onChangeCategory(e){
    let value=e.target.innerHTML;
    let list=data.filter(item=>item.type===value);
    render(list);
}
let li=document.getElementsByTagName('li');
for(let i=0;i<li.length;i++){
    li[i].addEventListener('click',onChangeCategory)
}
function checkSomething(){
    if(sessionStorage.email){
        var userImg=document.getElementById('userImg');
        userImg.innerHTML='欢迎'+sessionStorage.email;
    }
}
checkSomething()