function Penjumlahan() {
  var BilanganPertama = document.getElementById("fbilPertama");
  var BilanganKedua = document.getElementById("fbilKedua");

  var Jumlah = parseInt(BilanganPertama) + parseInt(BilanganKedua);

  alert("Hasil Penjumlahan " + Jumlah);
}

document.querySelector(
  ".form",
  addEventListener("submit", (e) => {
    e.preventDefault();

    Penjumlahan(alert);
  })
);
