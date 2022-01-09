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
    var category = window.location.href.match(/products_on_category(.+)/)[1]
    var category_info = await fetch(`/category${category}`).then((response) => {
      return response.json();
    });
    console.log(category_info);
    $(".active").html(category_info.name);
    $(".active").attr("id", category_info.id);
});


$(".btn").click(async function (){
  const id = $(this).attr("id");
  window.location.href = `/product/${id}`;
});