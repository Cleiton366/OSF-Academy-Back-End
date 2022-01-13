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

$(".fa-shopping-cart").click(async function () {
  if (sessionStorage.getItem("token")) {
    const response = await fetch("/cart/addItem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: sessionStorage.getItem("token"),
      },
      body: JSON.stringify({
        productId: $(this).parent().parent().parent().parent().parent().attr("id"),
        variantId: $(this).parent().parent().parent().attr("id"),
        quantity: 1,
      }),
    });
    const data = await response.json();
    if (data.items) {
      window.alert("Item added to cart");
    } else window.alert(data.error);
  } else {
    window.location.href = "/login";
  }
});

$("#userCart").click(function(){
  const token = sessionStorage.getItem("token")
  window.location.href = `/cart/${token}`;
});