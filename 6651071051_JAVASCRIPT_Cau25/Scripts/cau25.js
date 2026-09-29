var FOOD = {"Bún bò": 20000, "Hủ tiếu": 18000, "Bánh canh": 17000, "Phở bò": 19000,
            "Nuôi": 15000, "Bánh mì thịt": 12000, "Bánh cuốn": 15000};
var DRINK = {"Cà phê đá": 12000, "Cà phê sữa đá": 15000, "Chanh dây": 13000, "Chanh muối": 12000,
             "Xí muội": 14000, "Sữa tươi": 13000, "Cam vắt": 17000};
function fill(id, obj) {
  var s = document.getElementById(id);
  for (var k in obj) s.add(new Option(k, k));
}
fill("food", FOOD); fill("drink", DRINK);

function selected(id, obj) {
  return Array.from(document.getElementById(id).selectedOptions)
              .map(function (o) { return [o.value, obj[o.value]]; });
}
function tinhTien() {
  var items = selected("food", FOOD).concat(selected("drink", DRINK));
  var bill = document.getElementById("bill");
  if (items.length === 0) { bill.innerHTML = '<tr><td class="err">Vui lòng chọn ít nhất một món</td></tr>'; return; }
  var tong = 0;
  var html = '<tr style="color:blue"><th>Các món đã dùng</th><th>Tiền</th></tr>';
  items.forEach(function (it) { tong += it[1]; html += "<tr><td>" + it[0] + "</td><td>" + it[1] + "</td></tr>"; });
  if (document.querySelector('input[name="tg"]:checked').value === "dem") {
    var phuThu = tong * 0.1;
    html += "<tr><td>Phụ thu ban đêm (10%)</td><td>" + phuThu + "</td></tr>";
    tong += phuThu;
  }
  html += "<tr><td>Tổng tiền</td><td>" + tong + " đồng</td></tr>";
  bill.innerHTML = html;
}
