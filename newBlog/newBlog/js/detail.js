var data=localStorage.data?JSON.parse(localStorage.data):[];
var content=document.querySelector('.content');
content.innerHTML=data[9].titile+data[9].content;