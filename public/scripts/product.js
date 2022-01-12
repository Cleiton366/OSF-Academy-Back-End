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

  if($('#color').children('option').length == 0){
    $("#colors").hide();
  }

  if($('#size').children('option').length == 0){
    $("#sizes").hide();
  }

  if($('#width').children('option').length == 0){
    $("#widths").hide();
  }

});
