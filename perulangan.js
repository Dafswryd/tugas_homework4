// // Fungsi untuk menghasilkan bilangan acak antara 1 dan 100
// function generateRandomNumber() {
//     return Math.floor(Math.random() * 100) + 1;
//   }
  
//   // Fungsi utama permainan tebak nilai
//   function tebakNilai() {
//     const nilaiTebakan = generateRandomNumber();
//     let tebakan;
//     let jumlahTebakan = 0;
  
//     do {
//       tebakan = generateRandomNumber();
//       jumlahTebakan++;
//     } while (tebakan !== nilaiTebakan);
  
//     console.log(`Selamat! Anda berhasil menebak nilai ${nilaiTebakan} dengan ${jumlahTebakan} kali tebakan.`);
//   }
  
//   // Memulai permainan
//   tebakNilai();


// console.log(Math.random())
// for(let i = 100; i > 5; i--){
//     if(i == 89){
//         break
//     }
//     console.log(i)
// }

// var nilaiAwal = 1;
// while(nilaiAwal <= 5){
//     console.log('Angkot ' + nilaiAwal + ' beroperasi dengan baik.');
// nilaiAwal++
// }

var jmlangkot = 10;
var angkotBeroperasi = 4;
var noAngkot = 1;

while(noAngkot <= angkotBeroperasi){
    console.log('Angkot ' + noAngkot + ' beroperasi dengan baik.');
noAngkot++
}

for(noAngkot = angkotBeroperasi + 1; noAngkot <= jmlangkot; noAngkot++){
    console.log('Angkot ' + noAngkot + ' tidak beroperasi');
}