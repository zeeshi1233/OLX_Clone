function signup() {
    let prev=localStorage.getItem("users");
    let userData=prev ? JSON.parse(prev) : [];
    var name=document.getElementById("name");
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    if (name.value!==""&&email.value!=="" && password.value!=="") {
        
        var user={
            name:name.value,
            email:email.value,
            password:password.value,
            authen:true
        }
        
        userData.push(user)
        console.log(user.name);
        let stringfy=JSON.stringify(userData)
        localStorage.setItem("users",stringfy)
        
        window.location.href="login.html"
    }
else{
name.style.border="1px solid red";
email.style.border="1px solid red";
password.style.border="1px solid red";

}
}

function login() {
  var flag=false;
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    if (email.value!=="" && password.value!=="") {
var userrec=localStorage.getItem("users")
 var json=JSON.parse(userrec)
for(var i=0;i<json.length;i++){
if (email.value==json[i].email&&password.value==json[i].password) {
    alert("Login Successfully");
    localStorage.setItem("email",json[i].email);
    localStorage.setItem("password",json[i].password);
    localStorage.setItem("authenticate",json[i].authen);
    window.location.href="index.html";
    flag=true;
}
}
if (flag==false) {
    alert("Enter Valid Details")
    
}

    }
else{

email.style.border="1px solid red";
password.style.border="1px solid red";

}}


function shownav() {
  
    var gt=localStorage.getItem("users")
    var email=localStorage.getItem("email")
    var password=localStorage.getItem("password")
    var isauthen=localStorage.getItem("authenticate");
    var jso=JSON.parse(gt)
for(var i=0;i<jso.length;i++){
if (email===jso[i].email&&password===jso[i].password&&isauthen=="true") {

    document.getElementById("log").innerHTML="<img src='img/ai.jpg' width='50px' height='50px' style='border-radius:50%;'>";
    document.getElementById("logout").style.display="inline";
}}

}
shownav()

function logout() {
    document.getElementById("log").innerHTML=`<a class="login ms-3"  id="log" href="login.html">Login</a>`;
    document.getElementById("logout").style.display="none";
    window.location.href="login.html"

}
function sel() {
    var flag = false;
    var gt = localStorage.getItem("users");
    var email = localStorage.getItem("email");
    var password = localStorage.getItem("password");
    var isauthen = localStorage.getItem("authenticate");
    var jso = JSON.parse(gt);
  
    for (var i = 0; i < jso.length; i++) {
      if (email === jso[i].email && password === jso[i].password && isauthen === "true") {
        flag = true;
        document.getElementById("log").innerText = jso[i].name;
        window.location.href = "sel.html";
        break; // Add a break statement to exit the loop once a match is found
      }
    }
  
    if (flag === false) {
      window.location.href = "login.html";
    }
  }
  
  function sel() {
    var flag = false;
    var gt = localStorage.getItem("users");
    var email = localStorage.getItem("email");
    var password = localStorage.getItem("password");
    var isauthen = localStorage.getItem("authenticate");
    
    // Check if local storage data exists
    if (gt) {
      var jso = JSON.parse(gt);
  
      for (var i = 0; i < jso.length; i++) {
        if (email === jso[i].email && password === jso[i].password && isauthen === "true") {
          flag = true;
          document.getElementById("log").innerText = jso[i].name;
          window.location.href = "sel.html";
          break; // Add a break statement to exit the loop once a match is found
        }
      }
    }
  
    if (flag === false) {
      window.location.href = "login.html";
    }
  }
  

function sellnow() {
  var existingData = localStorage.getItem("Products");
  var arr = existingData ? JSON.parse(existingData) : [];

  var name = document.getElementById("name");
  var des = document.getElementById("des");
  var loc = document.getElementById("loc");
  var img = document.getElementById("img");
  var cost = document.getElementById("price");
  var brand = document.getElementById("brand");
if (name.value!==""&&des.value!==""&&loc.value!==""&&img.value!==""&&cost.value!==""&&brand.value!==""){
    
    var product = {
        name: name.value,
    des: des.value,
    loc: loc.value,
    img: img.value,
    cost: cost.value,
    brand: brand.value
};

arr.push(product);

var json = JSON.stringify(arr);
localStorage.setItem("Products", json);
window.location.href="index.html"
}
else{
name.style.border="2px solid red"
des.style.border="2px solid red"
loc.style.border="2px solid red"
img.style.border="2px solid red"
cost.style.border="2px solid red"
brand.style.border="2px solid red"

}
}

function showdata() {
    // var img=document.getElementById("img");
    // var name=document.getElementById("tit");
    // var cost=document.getElementById("cost");
    var existingData = localStorage.getItem("Products");
var json=JSON.parse(existingData)
for(var i=0;i<json.length;i++){
   var cont=document.getElementById("card");
var card=document.createElement("div");
card.setAttribute("class","card  gy-5 mb-2")
var content=document.createElement("div");
var btn=document.createElement("button");
var i2=document.createElement("i");
i2.setAttribute("class","fa-solid fa-heart text-end mthr");
btn.setAttribute("class","btn btn-warning position-absolute ms-2 mybtn")
var btntext=document.createTextNode("Futured")
content.setAttribute("class","content")
var img=document.createElement("img");
var name=document.createElement("p");
name.setAttribute("class","fw-bold p-2 myp");

var cost=document.createElement("p");
cost.setAttribute("class","fw-bold p-2 ");
 img.setAttribute("src",json[i].img);
 img.setAttribute("class","img1");
var nametext=document.createTextNode(json[i].name)
var costtext=document.createTextNode(json[i].cost)
name.appendChild(nametext);


cost.appendChild(costtext);
btn.appendChild(btntext);
card.appendChild(img);
content.appendChild(btn);
content.appendChild(i2);
content.appendChild(name);
content.appendChild(cost);
card.appendChild(content);
card.appendChild(content);
cont.appendChild(card);
}
}
showdata();