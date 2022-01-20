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

  await getProductsInfo();
});

$("#userCart").click(function () {
  const token = sessionStorage.getItem("token");
  window.location.href = `/cart/${token}`;
});

$("#userProfile").click(function () {
  const token = sessionStorage.getItem("token");
  window.location.href = `/profile/${token}`;
});

$(".fa-trash").click(function () {
  const productId = $(this).parent().parent().attr("id");
  const variantId = $(this).parent().attr("id");
  $(this).parent().parent().remove();

  fetch("/wishlist/removeItem", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      token: sessionStorage.getItem("token"),
    },
    body: JSON.stringify({
      productId: productId,
      variantId: variantId,
    }),
  });
});

async function getProductsInfo() {
  const productsLength = $("#products-container").children().length;

  for (var i = 1; i <= productsLength; i++) {
    const productId = $("#product-" + i)
      .parent()
      .attr("id");
    const product = await fetch("/getProduct/" + productId, {
      method: "GET",
    });
    const data = await product.json();
    $("#product-name-" + i).html(data[0].name);
    $("#img-" + i).attr(
      "src",
      "../images/" + data[0].image_groups[1].images[0].link
    );
  }
}
