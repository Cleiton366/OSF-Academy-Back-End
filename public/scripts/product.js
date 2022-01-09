$(document).ready(async function () {
  if (sessionStorage.getItem("token")) {
    $("#signinLi").hide();
    $("#signupLi").hide();
    $("#signoutLi").show();
    $("#profileLi").show();
    $("#cartLi").show();
    $("#signoutLi").show();
    $("#wishlistLi").show();
  } else {
    $("#signinLi").show();
    $("#signupLi").show();
    $("#signoutLi").hide();
    $("#profileLi").hide();
    $("#cartLi").hide();
    $("#signoutLi").hide();
    $("#wishlistLi").hide();
  }

  var category = $("#parent_category").attr("href").match(/products_on_category(.+)/)[1];
  var category_info = await fetch(`/category${category}`).then((response) => {
    return response.json();
  });
  $("#parent_category").html(category_info.name);
});

$("#wishlistBtn").click(function () {
  if (sessionStorage.getItem("token")) {
    console.log("logado");
  } else window.location.href = "/signin";
});

$("#cartBtn").click(function () {
  if (sessionStorage.getItem("token")) {
    console.log("logado");
  } else window.location.href = "/signin";
});

$("#buyBtn").click(function () {
  var token = sessionStorage.getItem("token");
  if (sessionStorage.getItem("token")) {
    console.log("logado");
  } else window.location.href = "/signin";
});

$(".fa-minus").click(function () {
  var qtd = $(".quantity").html();
  if (qtd > 1) {
    qtd--;
    $(".quantity").html(qtd);
  } else {
    window.alert("Quantity must be equal or greater than 1");
  }
});

$(".fa-plus").click(function () {
  var qtd = $(".quantity").html();
  qtd++;
  $(".quantity").html(qtd);
});