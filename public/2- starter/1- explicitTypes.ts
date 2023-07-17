//* explicitTypes açık tip atamaları yapmızı sağlar
//* bir özelliğe değer ataması yapınca değerin
//* tipini otamatik olarak alır
//* tip atamalarını özellikle kendimiz
//* yapmak isteyebiliriz. tip ataması yaparken
//* : ardından tipin isimini yazıyrouz

// temel tipler
let character: string;
let age: number;
let isSigned: boolean;

// diziler
let cars: string[] = [];
let ages: number[] = [];

// birden fazla tip değerine sahip olan dizi tanımlama
let mixed: (string | number | boolean)[] = [];

mixed.push('ahmet');
mixed.push(90);
mixed.push(true);

// objelerde tip atamasıı yapma
let person: object;

person = {
  name: 'Mehmet',
  age: 46,
  eye: 'black',
};

// bir obje ve alıcağı özelliklerin
// tiplerini tanımlama
let newPerson: {
  name: string;
  age: number;
  eye: string;
  ehliyet: boolean;
};

// tanımlanan tiplere sadık kalarak değer ataması yapma
newPerson = {
  name: 'Ali',
  age: 18,
  eye: 'blue',
  ehliyet: false,
};
