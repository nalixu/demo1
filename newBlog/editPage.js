var initData = localStorage.data ? JSON.parse(localStorage.data) : [];
var submit = document.getElementById('submit');
var resite = document.getElementById('resite');

function getQueryString(name) {
    var str = location.search.substring(1);
    var arr = str.split("&");
    var obj = {}
    for (var i = 0; i < arr.length; i++) {
        var key = arr[i].split("=")[0];
        var val = arr[i].split("=")[1]
        obj[key] = val;
    }
    if (name) {
        return obj[name]
    } else {
        return obj;
    }
}
let id = getQueryString('id')

function jump() {
    // getValue1();
    localStorage.data = JSON.stringify(initData);
    var content = document.getElementById('content');
    var title = document.getElementById('title');
    var current = new Date();
    var currentDate = current.getFullYear() + '-' + (current.getMonth() + 1 < 10 ? '0' + (current.getMonth() + 1) : current.getMonth() + 1) + '-' + current.getDate();
    title = title.value;
    content = content.value;
    createTime = currentDate;
    initData[id] = {
        title,
        content,
        createTime
    }; //数组下标例如initData[0]是一个对象赋值
    localStorage.data = JSON.stringify(initData);
    window.open("index.html");
    window.close();
}
submit.onclick = jump;
function cancel(){
    location.reload();
}
resite.onclick =cancel;

function render(article) {
    var textEdit = document.getElementById('textEdit');

    textEdit.innerHTML = `
        <input id="title" type="text" value="${article.title}"/>
        <hr>
        <textarea id="content" name="edit" id="edit">${article.content}</textarea> `
}
render(initData[id])
// todo: get detail by data 

// todo: rener detail 

// todo: editor artical