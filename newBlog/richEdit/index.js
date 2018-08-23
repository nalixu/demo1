var editData=localStorage.edit?JSON.parse(localStorage.edit):[];
var title=document.getElementsByTagName('h1');
var content=document.getElementsByTagName('p');
var image=document.getElementsByTagName('img');
function getValue(){
    var record={
        title:title.value,
        content:content.value,
        image:image.value
    }
    editData.push(record);
    console.log(editData);
    localStorage.edit=JSON.stringify(editData);
}
getValue();
