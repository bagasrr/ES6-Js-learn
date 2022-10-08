const namaBinatang = ["kambing", "anjing", "kucing", "sapi"];
const suaraBinatang = ["mbee", "guk", "meoong"];

const hasil = [];
for (let i = 0; i < suaraBinatang.length; i++) {
  hasil.push(namaBinatang[i] + " bersuara " + suaraBinatang[i]);
}

let nulis = document.getElementById("tes");

for (let u = 0; u < hasil.length; u++) {
  nulis.innerHTML = hasil[i];
}
