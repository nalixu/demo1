// save localStorage
// var initlog=localStorage.data?JSON.parse(localStorage.data):[]
var username=document.getElementById('username');
var password=document.getElementById('password');
var submitBtn=document.getElementById('submit');
// function setData(){
    // localStorage.user=JSON.stringify([
    //     {
    //     id:1,username:'adim',password:"admin"
    //    },
    //    {
    //     id:2,username:'11',password:"11"
    //    }, {
    //     id:3,username:'22',password:"22"
    //    }
    // ]);
   
// }
//get value of username and password
//map compare to localStorage 
//if right log in
submitBtn.onclick=function(){
    localStorage.setItem("user",'[{"id":0,"name":"admin","password":"1"},{"id":1,"name":"1","password":"1"},{"id":2,"name":"2","password":"2"}]');
    var dataString=localStorage.getItem('user');
    var dataArr=JSON.parse(dataString);

    // setData();
    for(var i=0;i<dataArr.length;i++){
        if(username.value==dataArr[i].name && password.value==dataArr[i].password){
            window.open("index.html");
            break;
        }
        // else{
        //     alert("用户名或密码错误！");
        // }
    }  
    // let users = JSON.parse(localStorage.user);
    let u =dataArr.find(item=>item.name ===username.value);
    if(u.password==password.value){
        window.open("index.html");
    }else{
            alert("用户名或密码错误！");
        }
   
}
// let users = JSON.parse(localStorage.user)
// undefined
// users
// (3) [{…}, {…}, {…}]0: {id: 0, name: "admin", password: "1"}1: {id: 1, name: "1", password: "1"}2: {id: 2, name: "2", password: "2"}length: 3__proto__: Array(0)
// let item =users.find(item=>item.username ==="admin")
// undefined
// item
// undefined
// let item =users.find((item)=>item.name ==="admin")
// VM646:1 Uncaught SyntaxError: Identifier 'item' has already been declared
//     at <anonymous>:1:1
// (anonymous) @ VM646:1
// let u =users.find((item)=>item.name ==="admin")
// undefined
// u
// {id: 0, name: "admin", password: "1"}id: 0name: "admin"password: "1"__proto__: Object
// u.password == 1"
// VM687:1 Uncaught SyntaxError: Invalid or unexpected token
// u.password == "1"
// true
// var u =users.find((item)=>item.name ==="admin55555")
// VM749:1 Uncaught SyntaxError: Identifier 'u' has already been declared
//     at <anonymous>:1:1
// (anonymous) @ VM749:1
// var admin =users.find((item)=>item.name ==="admin55555")
// undefined
// admin
// undefined
// admin.password
// VM787:1 Uncaught TypeError: Cannot read property 'password' of undefined
//     at <anonymous>:1:7
// (anonymous) @ VM787:1
// u.password	
// "1"
