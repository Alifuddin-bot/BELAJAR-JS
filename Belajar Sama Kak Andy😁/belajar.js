console.log("bismillah hello world");
console.log("---------------------");
// komentar pakek js
// setiap deklarasi di akhiri titik koma lebih baik
let namaSantri = "Alefoeden"; // di akhiri titik koma
let umur = 16; // integer atau number
let kenyang = false; // boolean
console.log(namaSantri); // print nilai
console.log(umur,kenyang); // debug biar jadi objek
// ver = bisa berubah ( mutable - versi jadul )
// let = bisa berubah ( mutable )
// const = tidak bisa berubah ( mutable )
const jumlahKelasAngkat2026 = 5;
console.log("Jumlah Kelas", jumlahKelasAngkat2026);
// umur e nambah per 01 juli
umur = 16;// let bisa di timpa / ubah lagi
console.log("Umur terkini :",umur);
//jumlahKelasAngkat2026 = 10;// mesti error ini
// bbrp keanehan penulisan di js
angkaX = "10";// string
angkaY = 50;
totalAngka = angkaY - angkaX;// 50 - "10"= ?
console.log("Total Angka :",totalAngka);
totalAngkaAneh = angkaY + angkaX;// 50 + "10"= "5010"
console.log("Total Angka Aneh :",totalAngkaAneh);
// Template literal = cara nyambung teks dari variable
const salam = "assalamualaikum";
const manyala = "🔥";
const sapaSapa = salam + "Babang Ganteng" + manyala;
console.log(sapaSapa);
// gunakan backtick 'isi komen'
const sapaSapaAlus = '${salam}, Babang Ganteng! ${manyala}';
console.log("sapaSapaAlus");
// cara mengenali tipe data: typeof
const tipeSalam = 'Tipe data salam: ${tipeof salam}';
const tipeUmur = 'Tipe data umur: ${tipeof umur}';
console.log("tipeSalam");
console.log("tipeUmur");

console.log("===========================================================")

// operator perbandingan
const umurBudi = 19; // integer
const umurUjang = "19"; // string
// sama dengan 2 (==): tidak membandingkan tipe data 
// sama dengan 3 (==): ikuti membandingkan tipe data 
const checkUmur = umurBudi == umurUjang;
console.log({ umurBudi, umurUjang, checkUmur });


// jika seumuran
if (checkUmur) {
    console.log("Budi dan Ujang Seumuran");
}else{
    console.log("Budi dan Ujang Tidak Seumuran");
}

const umurSukardi = 22;
if (umurSukardi > umurBudi){
    console.log("Sukardi Mudaan!");
}else{
    console.log("Sukardi Tuaan!");
}


// != tidak sama dengan 
// != tidak sama dengan banget (tipe data sama)
if(umurBudi !== umurUjang){
    console.log("Budi dan Ujang Beda!");
}else{
    console.log("Budi dan Ujang Samaan!");
}

//bperulangan -> for loop
for (let i = 1; i <= 5; i++) {
    console.log(`Hello Bang Ke-${i}!`);
    if (i === 2) {
        console.log('Wah udah lewat 2 aja...');
    }
}

// array = data berurutan yang berindeks
const daftarSantri = ["Bima","Raden","Ucup"];
console.log(daftarSantri);
console.log(daftarSantri[0]);
console.log(daftarSantri[1]);
console.log(daftarSantri[2]);
// object = pakai { } dan punya key
const profilBima = {
    nama: 'Bima Saputra Al-Jawi',
    kelas: 11,
    asrama: 'Ibnu Batutah'
}
console.log(profilBima);
console.log(profilBima.nama);
console.log(profilBima.kelas);
console.log(profilBima.asrama);
// Date => manipulasi penanggalan 
const tanggalBaru = new Date();
console.log(tanggalBaru);
console.log(tanggalBaru.toString());
console.log(tanggalBaru.toLocaleString());






