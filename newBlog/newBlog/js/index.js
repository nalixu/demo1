var data=localStorage.data?JSON.parse(localStorage.data):[];
var subnavData=localStorage.selectData?JSON.parse(localStorage.selectData):[];
var categoriesHidden=document.getElementById('categoriesHidden');
var category=document.getElementById('category');
var blogger=document.querySelector('blogger');

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
})
function renderSubnav(){
 
    var categoryList=document.getElementById('categoryList');
    subnavData.forEach(val=>{
        var categoryLi=document.createElement('li');
        categoryLi.innerHTML=`<a>${val.label}</a>`
        categoryList.append(categoryLi);
    })
    categoriesHidden.append(categoryList);
}
renderSubnav();
// 列表部分
function render(data){
    var container=document.querySelector('.container');
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
        <div class="contentText fade">
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
//cancellation sessionStorage
function checkSomething(){
    if(sessionStorage.email){
        var loginUser=document.querySelector('.loginUser');
        loginUser.innerHTML=`
        <small>欢迎${sessionStorage.email}</small>
        <small onclick="loginout()">注销</small>
        `
    }
}
checkSomething()
function loginout(){
    window.open('login.html');
    sessionStorage.clear();
    window.close();
}
//sort by compare date
function compare(property){
    return function(obj1,obj2){
        var value1=obj1[property];
        var value2=obj2[property];
        return 1;
    }
}
var sortObj=data.sort(compare('createTime'));
var newList=document.querySelector('.new');
newList.addEventListener('click',function(){
    render(sortObj);
})
//点击跳转写博客
var editBlog=document.querySelector('.editBlog');


editBlog.addEventListener('click',function(){
    if(sessionStorage.email){
       location.href='F:/project/demo1/newBlog/newBlog/newPage1.html'
    }else{
        location.href="F:/project/demo1/newBlog/newBlog/login.html";
    }

})

