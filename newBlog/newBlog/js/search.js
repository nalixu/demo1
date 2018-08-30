var inputType=document.getElementsByTagName('input');
var data=localStorage.data?JSON.parse(localStorage.data):[];
function getVal(){
if(document.onkeydown==="Enter"){
    window.open('typePage.html?type='+inputType.value);
}
}
getVal()