var inputType=document.querySelector('.inputType')
function getVal() {
	if(event.key==="Enter"){
		window.open('typePage.html?type='+inputType.value);
		window.close();
	}
}