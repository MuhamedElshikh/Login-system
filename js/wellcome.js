var currentUser;
var wellcome = document.getElementById("wellcome")
var logout = document.getElementById("logout")
if (localStorage.getItem("curuser") == null) {
    currentUser = [];
  } else {
    currentUser = JSON.parse(localStorage.getItem("curuser"));     
  }
  wellcome.innerHTML = currentUser[0]
  logout.addEventListener("click" , function () {
    localStorage.removeItem("curuser")
    window.history.pushState(null)
  })
