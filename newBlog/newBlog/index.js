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