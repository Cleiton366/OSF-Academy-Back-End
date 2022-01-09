$(document).ready(async function (){
    if(sessionStorage.getItem("token")){
        $("#signinLi").hide();
        $("#signupLi").hide();
        $("#signoutLi").show();
        $("#profileLi").show();
        $("#cartLi").show();
        $("#signoutLi").show();
        $("#wishlistLi").show();
      }else {
        $("#signinLi").show();
        $("#signupLi").show();
        $("#signoutLi").hide();
        $("#profileLi").hide();
        $("#cartLi").hide();
        $("#signoutLi").hide();
        $("#wishlistLi").hide();
      }
});

$("#wishlistBtn").click(function () {
  if(sessionStorage.getItem("token")){
    console.log("logado")
  } else window.location.href = "/signin";
});

$("#cartBtn").click(function () {
  if(sessionStorage.getItem("token")){
    console.log("logado")
  } else window.location.href = "/signin";
});

$("#buyBtn").click(function () {
  if(sessionStorage.getItem("token")){
    console.log("logado")
  } else window.location.href = "/signin";
});