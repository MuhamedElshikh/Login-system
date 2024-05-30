var sumpitUserName = document.getElementById("sumpitUserName");
var sumpitUserEmail = document.getElementById("sumpitUserEmail");
var sumpitUserPassword = document.getElementById("sumpitUserPassword");
var sumpitBtn = document.getElementById("sumpitBtn")
var okmsg = document.getElementById("okmsg")
var okmsgex = document.getElementById("okmsgex")
var alertmsg = document.getElementById("alertmsg")
var okmsgemex = document.getElementById("okmsgemex")
var alertmsgemex = document.getElementById("alertmsgemex")
var alertmsgex = document.getElementById("alertmsgex")

var users ;
 
if (localStorage.getItem("user") == null) {
       users = [];
     } else {
       users = JSON.parse(localStorage.getItem("user"));     
     }

okmsg.addEventListener("click",function(){
    alertmsg.classList.replace("d-flex","d-none")
})
okmsgex.addEventListener("click",function(){
    alertmsgex.classList.replace("d-flex","d-none")
    clere()
    sumpitUserName.classList.add("is-invalid")
        sumpitUserEmail.classList.add("is-invalid")
        sumpitUserPassword.classList.add("is-invalid")
})
okmsgemex.addEventListener("click",function(){
    alertmsgemex.classList.replace("d-flex","d-none")
    clere()
    sumpitUserName.classList.add("is-invalid")
        sumpitUserEmail.classList.add("is-invalid")
        sumpitUserPassword.classList.add("is-invalid")
})
sumpitBtn.addEventListener("click",function(){
if(sumpitUserName.classList.contains("is-invalid")&&sumpitUserEmail.classList.contains("is-invalid")&&sumpitUserPassword.classList.contains("is-invalid")){
    alertmsg.classList.replace("d-none","d-flex")
}else{
    var user = {code:sumpitUserName.value ,email:sumpitUserEmail.value ,password:sumpitUserPassword.value}
var userExist = users.some(function (user) {
    return user.code === sumpitUserName.value
}) 
var emailExist = users.some(function (user) {
    return user.email === sumpitUserEmail.value
}) 
    if(userExist===true){
        alertmsgex.classList.replace("d-none","d-flex")
    }else if(emailExist===true){
        alertmsgemex.classList.replace("d-none","d-flex")
    }
    else{
        users.push(user)
        console.log(users)
        localStorage.setItem("user",JSON.stringify(users))
        sumpitUserName.classList.add("is-invalid")
        sumpitUserEmail.classList.add("is-invalid")
        sumpitUserPassword.classList.add("is-invalid")
        clere ()
        sumpitBtn.setAttribute("href","index.html")
    }
    
}

  
})

function chack(e){
    var regex = {
        sumpitUserName:/^[a-zA-z0-9]{4,50}$/,
        sumpitUserEmail:/^[a-z0-9]{5,}@(yahoo|gmail|hotmail).com$/gi,
        sumpitUserPassword:/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20}/
    }
    if(e.id ==="sumpitUserName"){
if(regex.sumpitUserName.test(sumpitUserName.value)){
sumpitUserName.classList.add("is-valid")
sumpitUserName.classList.remove("is-invalid")
e.nextElementSibling.classList.replace("d-block", "d-none");
}else{
    sumpitUserName.classList.add("is-invalid")
    sumpitUserName.classList.remove("is-valid")
    e.nextElementSibling.classList.replace("d-none", "d-block");
}
    }else if (e.id ==="sumpitUserEmail"){
        //console.log(regex.sumpitUserEmail.test(sumpitUserEmail.value))
        
            if(regex.sumpitUserEmail.test(sumpitUserEmail.value)){
            sumpitUserEmail.classList.add("is-valid")
            sumpitUserEmail.classList.remove("is-invalid")
            e.nextElementSibling.classList.replace("d-block", "d-none");
            
            }else{
                sumpitUserEmail.classList.add("is-invalid")
                sumpitUserEmail.classList.remove("is-valid")
                e.nextElementSibling.classList.replace("d-none", "d-block");
            }
    }else if(e.id ==="sumpitUserPassword"){
       console.log(regex.sumpitUserPassword.test(sumpitUserPassword.value))
            if(regex.sumpitUserPassword.test(sumpitUserPassword.value)){
            sumpitUserPassword.classList.add("is-valid")
            sumpitUserPassword.classList.remove("is-invalid")
            e.nextElementSibling.classList.replace("d-block", "d-none");
            }else{
                sumpitUserPassword.classList.add("is-invalid")
                sumpitUserPassword.classList.remove("is-valid")
                e.nextElementSibling.classList.replace("d-none", "d-block");
            }
    }
}

function clere () {
    sumpitUserEmail.value=null
    sumpitUserName.value=null
    sumpitUserPassword.value=null
}
