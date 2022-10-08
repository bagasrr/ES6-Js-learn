//Object Literal (Make Koma ',' bukan titik koma ';')
// let mahasiswa = {
//   nama: "Bagas",
//   namaBelakang: "rusnadi",
//   power: 10,
//   makan: function (porsi) {
//     this.power += porsi;
//     console.log(`Power ${this.nama + this.namaBelakang} sekarang adalah ${this.power}`);
//     if (this.power >= 20) {
//       console.log(`Power kamu sudah berada di lv GOD`);
//     }
//   },
// };

//fuction Declaration (make titik koma)
// function mahasiswa(nama, power) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.power = power;

//   mahasiswa.makan = function (porsi) {
//     this.power += porsi;
//     console.log(`Power ${this.nama} sekarang adalah ${this.power}`);
//     if (this.power >= 20) {
//       console.log(`Power kamu sudah berada di lv GOD`);
//     }
//   };
//   mahasiswa.main = function (jam) {
//     this.power -= jam;
// console.log(`Power ${this.nama} sekarang adalah ${this.power}, berkurang karena main sebanyak ${jam} jam`);
//   };
//   return mahasiswa; // harus memakai return jika ingin menampilkan data pada func Declaration
// }

// let bagas = mahasiswa("bagas", 3); //harus di deklarasiin jika ingin menampilkan data pada func Declatarion
// let ramadhan = mahasiswa("ramadhan, 14");

//Constructor function

// function mahasiswa(nama, power) {
//   this.nama = nama;
//   this.power = power;

//   this.makan = function (porsi) {
//     this.power += porsi;
// console.log(`Power ${this.nama} sekarang adalah ${this.power}`);
// if (this.power >= 20) {
//       console.log(`Power kamu sudah bekrada di lv GOD`);
//     }
//   };
//   this.main = function (jam) {
//     this.power -= jam;
//     console.log(`Power ${this.nama} sekarang adalah ${this.power}, berkurang karena main sebanyak ${jam} jam`);
//   };
// }

// let bagas = new mahasiswa("bagas", 3); //harus di deklarasiin jika ingin menampilkan data pada func Declatarion
// let ramadhan = new mahasiswa("ramadhan", 14);

// Prototype
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `sekarang energi kamu adalah ${this.energi}`;
// };
// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `sekarang energi kamu adalah ${this.energi}`;
// };
// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `sekarang energi kamu adalah ${this.energi}`;
// };

// let bagas = new Mahasiswa("bagas", 10);

// end prototype

// Class, prototype simple
// class Mahasiswa {
//   constructor(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//   }

//   makan(porsi) {
//     this.energi += porsi;
//     return `sekarang energi kamu adalah ${this.energi}`;
//   }
//   main(jam) {
//     this.energi -= jam;
//     return `sekarang energi kamu adalah ${this.energi}`;
//   }
//   tidur(jam) {
//     this.energi += jam * 2;
//     return `sekarang energi kamu adalah ${this.energi}`;
//   }
// }
// let bagas = new Mahasiswa("bagas", 2);

// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// const newAngka = [];
// make for
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

// make filter
// const newAngkaFilter = angka.filter(function (a) {
//   return a >= 3;
// });

//arrow function
// const newAngkaFilterArrow = angka.filter( a => a >= 3);
// console.log(newAngkaFilterArrow);

// map (telusuri masing masing dan llakukan perintah)
// const newAngkaMap = angka.map((a) => a + 3);
// console.log(angka);
// console.log(newAngkaMap);

// reduce (menggabungkan)
// const newAngkaReduce = angka.reduce((a, c) => a + c);
// console.log(newAngkaReduce);

// Method Chaining

// const newAngkaMC = angka
//   .filter((a) => 5)
//   .map((a) => a * 2)
//   .reduce((a, c) => a + c);

// console.log(newAngkaMC);

// menggabungkan 2 Array
const nHewan = ["anjing", "kucing", "babi"];
const tHewan = ["menggongong", "mengeong", "ngok-ngok"];

let newArray = [];

let gabungan = function () {
  for (i = 0; i <= nHewan.length; i++) {
    function embed() {
      for (k = 0; k <= tHewan.length; k++) {
        nHewan[i] + " " + tHewan[i];
        return;
      }
    }
  }
  console.log(embed);
  newArray.append(embed);
};
