var CAN = ["Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
var CHI = ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"];
function canChi() {
  var s = document.getElementById("nam").value.trim();
  var loi = document.getElementById("loi"), kq = document.getElementById("kq");
  loi.innerText = ""; kq.value = "";
  // validate: chỉ chứa chữ số, khác rỗng, trong khoảng 1..9999
  if (!/^\d+$/.test(s) || parseInt(s, 10) < 1 || parseInt(s, 10) > 9999) {
    loi.innerText = "Năm phải là số nguyên dương từ 1 đến 9999";
    return;
  }
  var y = parseInt(s, 10);
  kq.value = CAN[y % 10] + " " + CHI[y % 12];
}
