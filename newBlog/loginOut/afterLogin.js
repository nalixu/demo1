function remove(){
    sessionStorage.clear();
    console.log(sessionStorage.username);
    // window.open('login.html')
}
function render(){
    var admin=document.getElementById('admin');
    var loginList=document.createElement('div');
    
    loginList.innerHTML=
    `<span>${sessionStorage.username}</span>
    <span onclick="remove()">注销</span>`
    admin.append(loginList);
}
render();