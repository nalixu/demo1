var data = localStorage.data ? JSON.parse(localStorage.data) : [];
var title = document.querySelector('.editTitle');
var submit = document.querySelector('.submit');
var imgSrc = ['./img/1.jpg', 'http://img02.tooopen.com/images/20160509/tooopen_sy_161967094653.jpg', './img/3.jpg', 'http://seopic.699pic.com/photo/00026/7248.jpg_wh1200.jpg', 'http://t2.hddhhn.com/uploads/tu/201606/32/n3uuqssg2ks.jpg', 'http://t2.hddhhn.com/uploads/tu/201606/32/ywdfqgxr00b.jpg', 'http://t2.hddhhn.com/uploads/tu/201606/32/goosj3zcbj5.jpg'];
var t = Math.random() * 10 % 7;
var testEditor = editormd("test-editormd", {
    width  : "90%",
    height : 640,
    path   : "../lib/",
    saveHTMLToTextarea : true
});
t = parseInt(t);

function getValue() {
    var current = new Date();
    var createTime = current.getFullYear() + '-' + (current.getMonth + 1 < 10 ? '0' + (current.getMonth() + 1) : current.getMonth() + 1) + '-' + current.getDate() + ' ' + current.getHours() + ':' + current.getMinutes() + ':' + current.getSeconds();

    var record = {
        title: title.value,
        content: testEditor.getHTML(),
        createTime: createTime,
        image: imgSrc[t],
        type: myselect.options[myselect.selectedIndex].text
    }
    // var record = editor.txt.html();
    data.push(record);

}

function jump() {
    getValue();
    localStorage.data = JSON.stringify(data);
    window.open('index.html');
    window.close();
}
submit.onclick = jump;
// checkout login
function checkSomething() {
    if (!sessionStorage.email) {
        // window.open('login.html');
       
        // window.close();
        location.href="F:/project/demo1/newBlog/newBlog/login.html";
    }
}
if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", checkSomething)
} else {
    checkSomething();
}

//select
var initSelect = localStorage.selectData ? JSON.parse(localStorage.selectData) : []
var myselect = document.getElementById('myselect');
var addbtn = document.getElementById('addbtn');

function getSelectValue() {
    var mytext = document.getElementById('mytext');
    var mytextValue = mytext.value;
    for (var i = 0; i < initSelect.length; i++) {
        if (mytextValue === initSelect[i].label) {
            alert('不能输入重复的内容');
            mytext.value = '';
            return false;
        }
    }
    initSelect.push({
        id: initSelect.length,
        name: mytext.value,
        label: mytext.value
    })
    localStorage.selectData = JSON.stringify(initSelect);
    mytext.value = '';
}

function renderOption() {
    getSelectValue();
    var optionStr = '<option value="life">生活</option><option value="health">健康</option><option value="study">学习</option>';
    initSelect.forEach(val => {
        optionStr += '<option value="' + val.name + '">' + val.label + '</option>'
    });
    myselect.innerHTML = optionStr;
}

addbtn.addEventListener('click', renderOption);