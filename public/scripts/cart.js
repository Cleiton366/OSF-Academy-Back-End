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

$(".fa-trash").click(function () {
  var newTotal = $("#total").text();
  const productId = $(this).parent().parent().attr("id");
  const variantId = $(this).parent().attr("id");
  newTotal -=
    $("#price" + productId).text() * $("#quantity" + productId).text();
  $("#total").text(newTotal);
  $(this).parent().parent().remove();
  fetch("/cart/removeItem", {
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

$(".fa-minus").click(function () {
  const productId = $(this).parent().parent().attr("id");
  const variantId = $(this).parent().attr("id").replace("quantity-", "");
  var qtd = $("#quantity" + productId).html();
  if (qtd > 1) {
    qtd--;
    $("#quantity" + productId).html(qtd);
    const newTotal = $("#total").text() - $("#price" + productId).text();
    $("#total").text(newTotal);
    changeQuantity(qtd, productId, variantId);
  }
});

$(".fa-plus").click(function () { 
  const productId = $(this).parent().parent().attr("id");
  const variantId = $(this).parent().attr("id").replace("quantity-", "");
  var qtd = $("#quantity" + productId).html();
  qtd++;
  $("#quantity" + productId).html(qtd);
  var newTotal = parseInt($("#total").text()) + 
  parseInt($("#price" + productId).text());
  $("#total").text(newTotal);
  changeQuantity(qtd, productId, variantId);
});

function changeQuantity(qtd, productId, variantId) {
  fetch("/cart/changeItemQuantity", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: sessionStorage.getItem("token"),
    },
    body: JSON.stringify({
      productId: productId,
      variantId: variantId,
      quantity: qtd,
    }),
  });
}

async function getProductsInfo(){
  const productsLength = $("#products-container").children().length;

  for(var i = 1; i <= productsLength; i++){
    const productId = $("#product-"+i).parent().attr("id");
    const product = await fetch("/getProduct/"+productId, {
      method: "GET",
    });
    const data = await product.json();
    $("#product-name-"+i).html(data[0].name);
    $("#img-"+i).attr("src", "../images/"+data[0].image_groups[1].images[0].link);
  }
}