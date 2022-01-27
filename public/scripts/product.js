var product;
const productId = $(".product-info").attr("id");
var color;
var size;
var width;
var variantId;

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

  var category = $("#parent_category")
    .attr("href")
    .match(/products_on_category(.+)/)[1];
  var category_info = await fetch(`/category${category}`).then((response) => {
    return response.json();
  });
  $("#parent_category").html(category_info.name);

  if ($("#color").children("option").length == 0) {
    $("#colors").hide();
  }

  if ($("#size").children("option").length == 0) {
    $("#sizes").hide();
  }

  if ($("#width").children("option").length == 0) {
    $("#widths").hide();
  }

  product = await fetch(`/getProduct/${productId}`).then((response) => {
    return response.json();
  });
});

$("#cartBtn").click(async function () {
  verifyVariants();
  if (sessionStorage.getItem("token")) {
    const response = await fetch("/cart/addItem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: sessionStorage.getItem("token"),
      },
      body: JSON.stringify({
        productId: productId,
        variantId: variantId,
        quantity: $(".quantity").html().trim(),
      }),
    });

    const data = await response.json();
    if (data.items) {
      window.alert("Item added to cart");
    } else window.alert(data.error);
  } else window.location.href = "/signin";
});

$("#wishlistBtn").click(async function () {
  verifyVariants();
  if (sessionStorage.getItem("token")) {
    const response = await fetch("/wishlist/addItem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: sessionStorage.getItem("token"),
      },
      body: JSON.stringify({
        productId: productId,
        variantId: variantId,
        quantity: 1,
      }),
    });

    const data = await response.json();
    if (data.items) {
      window.alert("Item added to wishlist");
    } else window.alert(data.error);
  } else window.location.href = "/signin";
});

$("#buyBtn").click(async function () {
  const token = sessionStorage.getItem("token");
  if (token) {
    verifyVariants();
    const amount =
      parseFloat($("#price").html().trim()) *
      parseFloat($(".quantity").html().trim());
    var items = [];
    for (var i = 0; i < product[0].variants.length; i++) {
      if (product[0].variants[i].product_id == variantId) {
        items.push({
          variant: product[0].variants[i],
          _id: product[0]._id,
          productId: productId,
          quantity: $(".quantity").html().trim(),
        });
      }
    }
    window.location.href = `/checkout?amount=${amount}&items=${encodeURIComponent(
      JSON.stringify(items)
    )}&token=${token}`;
  } else window.location.href = "/signin";
});

$(".fa-minus").click(function () {
  var qtd = $(".quantity").html();
  if (qtd > 1) {
    qtd--;
    $(".quantity").html(qtd);
  }
});

$(".fa-plus").click(function () {
  var qtd = $(".quantity").html();
  qtd++;
  $(".quantity").html(qtd);
});

$("#userCart").click(function () {
  const token = sessionStorage.getItem("token");
  window.location.href = `/cart/${token}`;
});

$("#userWishlist").click(function () {
  const token = sessionStorage.getItem("token");
  window.location.href = `/wishlist/${token}`;
});

$("#userProfile").click(function () {
  const token = sessionStorage.getItem("token");
  window.location.href = `/profile/${token}`;
});

function verifyVariants() {
  if ($("#color").children("option").length == 0) {
    color = "empty";
  } else color = $("#color").find(":selected").val().trim();

  if ($("#size").children("option").length == 0) {
    size = "empty";
  } else size = $("#size").find(":selected").val().trim();

  if ($("#width").children("option").length == 0) {
    width = "empty";
  } else width = $("#width").find(":selected").val().trim();

  if (size == "empty" && width == "empty" && color != "empty") {
    for (var i = 0; i < product[0].variants.length; i++) {
      if (product[0].variants[i].variation_values.color == color) {
        variantId = product[0].variants[i].product_id;
      }
    }
  } else if (width == "empty" && width == "empty" && size != "empty" && color != "empty" ) { 
    for (var i = 0; i < product[0].variants.length; i++) {
      if ((product[0].variants[i].variation_values.color == color &&
          product[0].variants[i].variation_values.size == size) ||
        product[0].variants[i].variation_values.accessorySize == size ) {
        variantId = product[0].variants[i].product_id;
      }
    }
  } else if (color == "empty" && width == "empty" && size != "empty") {
    for (var i = 0; i < product[0].variants.length; i++) {
      if ( product[0].variants[i].variation_values.size == size ||
        product[0].variants[i].variation_values.accessorySize == size ) {
        variantId = product[0].variants[i].product_id;
      }
    }
  } else {
    for (var i = 0; i < product[0].variants.length; i++) {
      if ((product[0].variants[i].variation_values.color == color &&
          product[0].variants[i].variation_values.width == width &&
          product[0].variants[i].variation_values.size == size) ||
        product[0].variants[i].variation_values.accessorySize == size ) {
        variantId = product[0].variants[i].product_id;
      }
    }
  }
}
