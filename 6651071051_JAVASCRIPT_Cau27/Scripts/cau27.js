function xoa(btn) {
  btn.parentNode.parentNode.remove(); // xóa <tr> chứa nút vừa nhấn
}
function tinh(input) { // tự cập nhật cột Tổng khi sửa số lượng / đơn giá
  var inp = input.parentNode.parentNode.querySelectorAll("input[type=text]");
  var t = parseFloat(inp[0].value) * parseFloat(inp[1].value);
  inp[2].value = isNaN(t) ? "" : t;
}
