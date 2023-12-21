document.addEventListener("DOMContentLoaded", function () {
  var displayInput = document.getElementById("displayinput");
  var displayOutput = document.getElementById("displayoutput");

  displayInput.addEventListener("input", function () {
    var inputValue = displayInput.value;

    displayOutput.value = inputValue;
  });
});

//func insert angka
function insert(num) {
  document.form.displayinput.value += num;
}

//hitung
function equal() {
  var hasil = document.form.displayinput.value;
  //   document.form.displayinput.value = eval(hasil);
  document.form.displayoutput.value = eval(hasil);
}

//percent
function percent() {
  var hasil = document.form.displayinput.value;
  var numeric = parseFloat(hasil);
  // document.form.displayinput.value = numeric / 100;
}

function modulus() {
  var hasil = document.form.displayinput.value;
  var numeric = parseFloat(hasil);
}

//deleteall
function deleteall() {
  document.form.displayinput.value = "";
  document.form.displayoutput.value = "";
}

//backspace
function backspace() {
  var hasil = document.form.displayinput.value;
  document.form.displayinput.value = hasil.slice(0, -1);
}
