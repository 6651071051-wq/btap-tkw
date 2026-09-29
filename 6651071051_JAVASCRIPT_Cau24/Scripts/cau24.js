var sel = document.getElementById("thang");
for (var i = 1; i <= 12; i++) sel.add(new Option(i, i));
var TEN = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
function xuatThu() {
  var d = parseInt(document.getElementById("ngay").value, 10);
  var m = parseInt(sel.value, 10);
  var y = parseInt(document.getElementById("nam").value, 10);
  var kq = document.getElementById("kq");
  var dt = new Date(y, m - 1, d);
  // kiểm tra ngày hợp lệ (vd: 31/2 sẽ bị tràn sang tháng sau)
  if (isNaN(d) || isNaN(y) || dt.getDate() !== d || dt.getMonth() !== m - 1) {
    kq.innerHTML = '<span class="err">Ngày tháng năm không hợp lệ</span>';
    return;
  }
  kq.innerText = TEN[dt.getDay()] + " Ngày " + d + " tháng " + m + " năm " + y;
}
