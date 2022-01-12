$(".d-flex").submit(function (event) {
  event.preventDefault();
  $(this).submit();
});

$(".btn.btn-outline-success").click(function () {
  const key_word = $(".form-control.me-2").val();
  window.location.href = `/search_result/${key_word}`;
});
