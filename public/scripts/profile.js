$(document).ready(function () {
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
    const user = JSON.parse(sessionStorage.getItem("user"));
    $("#userName").text(user.name);
    $("#userEmail").text(user.email);
});

$("#userCart").click(function(){
    const token = sessionStorage.getItem("token")
    window.location.href = `/cart/${token}`;
});
  
$("#userWishlist").click(function(){
    const token = sessionStorage.getItem("token")
    window.location.href = `/wishlist/${token}`;
});

$("#userCartBtn").click(function(){
    const token = sessionStorage.getItem("token")
    window.location.href = `/cart/${token}`;
});
  
$("#userWishlistBtn").click(function(){
    const token = sessionStorage.getItem("token")
    window.location.href = `/wishlist/${token}`;
});