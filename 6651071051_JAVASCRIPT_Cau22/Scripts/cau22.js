function calc(op) {
  var a = parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);
  var r;
  if (isNaN(a) || isNaN(b)) r = "Vui lòng nhập hai số hợp lệ";
  else if (op === "/" && b === 0) r = "Không thể chia cho 0";
  else r = (op === "*") ? a * b : a / b;
  document.getElementById("kq").innerText = r;
}
