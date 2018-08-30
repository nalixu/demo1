var inputType=document.querySelector('.inputType')
var data=localStorage.data?JSON.parse(localStorage.data):[];
function getVal() {
	if(event.key==="Enter"){
		window.open('typePage.html?type='+inputType.value);
		window.close();
	}
}
