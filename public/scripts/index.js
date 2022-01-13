//getting all categories from backend
$(document).ready(async function () {
  const categories = await fetch("/all_categories").then((response) => {
    return response.json();
  });
  
  var render = "";
  for (var i = 0; i < categories.length; i++) {
    render = "";
    if (categories[i].parent_category_id == "mens-accessories") {
      render = `<a id="${categories[i].id}" class="products-category"`+
      `href="/products_on_category/${categories[i].id}">${categories[i].name}</a>`;
      $("#mens-accessories").append(render);
    } else if (categories[i].parent_category_id == "mens-clothing") {
      render = `<a id="${categories[i].id}" class="products-category"`+
      `href="/products_on_category/${categories[i].id}">${categories[i].name}</a>`;
      $("#mens-clothing").append(render);
    } else if (categories[i].parent_category_id == "womens-accessories") {
      render = `<a id="${categories[i].id}" class="products-category"`+
      `href="/products_on_category/${categories[i].id}">${categories[i].name}</a>`;
      $("#womens-accessories").append(render);
    } else if (categories[i].parent_category_id == "womens-clothing") {
      render = `<a id="${categories[i].id}" class="products-category"`+
      `href="/products_on_category/${categories[i].id}">${categories[i].name}</a>`;
      $("#womens-clothing").append(render);
    } else if (categories[i].parent_category_id == "womens-jewelry") {
      render = `<a id="${categories[i].id}" class="products-category"`+
      `href="/products_on_category/${categories[i].id}">${categories[i].name}</a>`;
      $("#womens-jewelry").append(render);
    }
  }

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

$("#userCart").click(function(){
  const token = sessionStorage.getItem("token")
  window.location.href = `/cart/${token}`;
});