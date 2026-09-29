var hs = document.getElementById("hs");
[1.0, 1.5, 2.0, 2.5, 3.2, 3.5, 4.0].forEach(function (v) {
  hs.add(new Option(v.toFixed(1), v));
});
hs.value = "3.2";
function tinhLuong() {
  var luong = parseFloat(document.getElementById("luong").value);
  var kq = document.getElementById("kq");
  if (isNaN(luong) || luong < 0) { kq.innerHTML = '<span class="err">Lương không hợp lệ</span>'; return; }
  kq.innerText = luong * parseFloat(hs.value);
}
