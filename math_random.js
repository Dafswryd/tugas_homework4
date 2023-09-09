// Mencari Nilai Random dari angka 1 - 50 sebanyak 100 angka
var min = 1;
var max = 50;
var numberOfRandomNumbers = 100;
var randomNumbers = [];

for (var i = 0; i < numberOfRandomNumbers; i++) {
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  randomNumbers.push(randomNumber);
}

//Memecah membagi 2 atau mencari nilai genap dan ganjil

var indeksGenap = []
var indeksGanjil = []

for (var i = 0; i < randomNumbers.length; i++){
    if ([i] % 2 === 0){
    indeksGenap.push(randomNumbers[i]);        
    } else {
        indeksGanjil.push(randomNumbers[i]);
    }
}

console.log("Random Numbers : " + randomNumbers);
console.log(" ")
console.log("Indeks Genap : " + indeksGenap);
console.log(" ")
console.log("Indeks Ganjil : " + indeksGanjil);
console.log(" ")


//Mencari nilai Minimum, Maksimum, Total dan Rata rata dari nilai genap

var minimumGenap = indeksGenap[0];
var maximumGenap = indeksGenap[0];
var totalGenap = 0;

for (var i = 0; i < indeksGenap.length; i++) {
    var nilaiGenap = indeksGenap[i];
    
    if (nilaiGenap < minimumGenap){
        minimumGenap = nilaiGenap;
    }

    if (nilaiGenap > maximumGenap){
        maximumGenap = nilaiGenap;
    }

    totalGenap += nilaiGenap;
}

var rataRataGenap = totalGenap / indeksGenap.length;

console.log("Nilai Minimum dari Genap : " + minimumGenap);
console.log("Nilai Maksimum dari Genap : " + maximumGenap);
console.log("Total dari Genap : " + totalGenap);
console.log("Rata-rata dari Genap : " + rataRataGenap);
console.log(" ")

//Mencari nilai Minimum, Maksimum, Total dan Rata rata dari nilai ganjil

var minimumGanjil = indeksGanjil[0];
var maximumGanjil = indeksGanjil[0];
var totalGanjil = 0;

for (var i = 0; i < indeksGanjil.length; i++) {
    var nilaiGanjil = indeksGanjil[i];
    
    if (nilaiGanjil < minimumGanjil){
        minimumGanjil = nilaiGanjil;
    }

    if (nilaiGanjil > maximumGanjil){
        maximumGanjil = nilaiGanjil;
    }

    totalGanjil += nilaiGanjil;
}

var rataRataGanjil = totalGanjil / indeksGanjil.length;

console.log("Nilai Minimum dari Ganjil : " + minimumGanjil);
console.log("Nilai Maksimum dari Ganjil : " + maximumGanjil);
console.log("Total dari Ganjil : " + totalGanjil);
console.log("Rata-rata dari Ganjil : " + rataRataGanjil);
console.log(" ")

//Mencari perbandingan nilai minimum antara ganjil dan genap

if(minimumGenap > minimumGanjil) {
    console.log("Minimal Genap lebih besar dari Minimal Ganjil")
} else if (minimumGenap < minimumGanjil) {
    console.log("Minimal Ganjil lebih besar dari minimal Genap")
} else {
    console.log("Minimal Ganjil dan Minimal Genap sama nilai nya")
}
console.log(" ")

//Mencari perbandingan nilai maksimum antara ganjil dan genap

if(maximumGenap > maximumGanjil) {
    console.log("Maximal Genap lebih besar dari Maximal Ganjil")
} else if (maximumGenap < maximumGanjil) {
    console.log("Maximal Ganjil lebih besar dari Maximal Genap")
} else {
    console.log("Maximal Ganjil dan Maximal Genap sama nilai nya")
}
console.log(" ")

//Mencari perbandingan nilai total antara ganjil dan genap

if(totalGenap > totalGanjil) {
    console.log("Total Genap lebih besar dari Total Ganjil")
} else if (totalGenap < totalGanjil) {
    console.log("Total Ganjil lebih besar dari Total Genap")
} else {
    console.log("Total Ganjil dan Total Genap sama nilai nya")
}
console.log(" ")

//Mencari perbandingan nilai rata rata antara ganjil dan genap

if(rataRataGenap > rataRataGanjil) {
    console.log("Rata rata Genap lebih besar dari Rata rata Ganjil")
} else if (rataRataGenap < rataRataGanjil) {
    console.log("Rata rata Ganjil lebih besar dari Rata rata Genap")
} else {
    console.log("Rata rata Ganjil dan Rata rata Genap sama nilai nya")
}
console.log(" ")