$(function () {


  $("#addNumber").on("click", function () {
    let number = parseInt($("#product-number").val());
    number += 1;
    $("#product-number").val(number);
  })

  $("#reduceNumber").on("click", function () {
    let number = parseInt($("#product-number").val());
    number -= 1;
    $("#product-number").val(number);
    if (number < 1) {
      number = 0;
      $("#product-number").val(number);
    }
  })

  $("#addCart").on("click", function () {
    alert("請先登入會員")
  })
})