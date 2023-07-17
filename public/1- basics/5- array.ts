// sabit türlere sahip diziler
// ts diziler tek bir türden oluşuyorsa
// o tür dışında bir değer gönderemeyiz

//! string'ler dizisi
let names = ['Ahmet', 'Mehmet', 'Bilal', 'Ftama'];

names.push('İnci');
// names.push(90)
// names[2] = 87

//! sayılar dizisi
let numbers = [10, 20, 99, 7, 16];

numbers.push(109);
// numbers.push("90")
// number[0] = "deneme"

//! karışık değerler sahip dizi
let mixed = ['ahmet', 19, 'ali', 50, 60];

mixed.push('inci');
mixed.push(10);
mixed[0] = 10;

// dizilere  type atamasını kendimiz nasıl yaparız?

//* sayı dizileri tanımlama
let newNumbers: number[] = [];

newNumbers.push(109);
newNumbers.push(99);

console.log(newNumbers);

//* string dizileri tanımlama
let cars: string[] = [];

cars.push('BMW');
cars.push('Audi');
cars.push('Mercedes');
// cars.push(9000)
console.log(cars);
