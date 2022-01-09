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


$(".btn").click(async function (){
  const id = $(this).attr("id");
  window.location.href = `/product/${id}`;
});