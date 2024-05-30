var userName = document.getElementById("userName");
var userPassword = document.getElementById("userPassword");
var loginBtn = document.getElementById("loginBtn")
var okmsg = document.getElementById("okmsg")
var alertmsg = document.getElementById("alertmsg")
var okmsgm = document.getElementById("okmsgm")
var alertmsgm = document.getElementById("alertmsgm")
var users ;
var currentUser=[];
if (localStorage.getItem("user") == null) {
       users = [];
     } else {
       users = JSON.parse(localStorage.getItem("user"));     
     }

console.log(users)
loginBtn.addEventListener("click",function(){
    
    var word = userName.value;
var pass = userPassword.value;

for(var i=0 ; i<users.length; i++){
    
    var user = users[i]
    var x = user.email===word;
    var y = user.password===pass;
        if(x===true){
            
            if(y===true){
                loginBtn.setAttribute("href","wellcomepage.html")
                currentUser.push(user.code)
                localStorage.setItem("curuser",JSON.stringify(currentUser))
            }else{
                alertmsg.classList.replace("d-none","d-flex")
            
               console.log("y f ");
            }

    }
    else{
        alertmsgm.classList.replace("d-none","d-flex")
    }
}
     })
okmsg.addEventListener("click",function(){
    alertmsg.classList.replace("d-flex","d-none")
    
})
okmsgm.addEventListener("click",function(){
    alertmsgm.classList.replace("d-flex","d-none")
    
})
