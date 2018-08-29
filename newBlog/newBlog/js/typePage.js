// var data=localStorage.data?JSON.parse(localStorage.data):[];
var data=JSON.parse(localStorage.data);
function getQueryString(name){
    var str=location.search.substring(1);
    var arr=str.split('&');
    var obj={};
    for(var i=0;i<arr.length;i++){
        var key=arr[i].split('=')[0];
        var val=arr[i].split('=')[1];
        obj[key]=val;
    }
    if(name){
        return obj[name];
    }else{
        return obj;
    }
}
let type=getQueryString('type');
let type1=decodeURI(type);
function render(data){
    var container=document.querySelector('.container');
    document.querySelector('.list').remove();
    var list=document.createElement('div');
    list.className='list';
    
    data.forEach((val,key)=>{
        var article=document.createElement('div');
        article.className='article';
        article.innerHTML=`
        <img src="${val.image}" alt="1" />
        <div class="articleContent">
            <div class="title"><a href='detail.html?id=${key}'>${val.title}</a></div>
            <div class="articleNote">
                <div class="noteLeft">By<a>REIC KARKOVACK</a>${val.createTime}</div>
                <div class="noteRight"><a>${val.type}</a></div>
            </div>
            <div class="articleText">
               ${val.content}
            </div>
        </div>
        `
        list.append(article);
        
    })
   container.append(list);
   
}

// render(data);


let articleList=data.filter(item=>item.type==type1);
render(articleList);
