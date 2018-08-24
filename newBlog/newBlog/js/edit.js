var data=localStorage.data?JSON.parse(localStorage.data):[];
var titile=document.querySelector('.editTitle');
var submit=document.querySelector('.submit');
function getValue(){
    var record={
        titile:titile.value,
        content:editor.txt.html()
    }
    // var record = editor.txt.html();
    data.push(record);
    localStorage.data=JSON.stringify(data);
}
// function jump(){
//     getValue();
//     window.open('index.html');
// }
submit.onclick=getValue;
