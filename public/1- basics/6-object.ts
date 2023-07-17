// Ts ile bir obje tanımladığımız zaman
// objeye ekstra olarak yeni özellik ekleyemeyiz
// ve var olan değerlere ilk tiplerinin dışında
// yeni bir tipte değer ataması yapmıyoruz

let person = {
  name: 'Bilal',
  age: 45,
  eyeColor: 'black',
  ehliyet: true,
};

person.name = 'Mehmet';
person.age = 50;
// person.age = "46"
// person.hobi = ["TV","Yüzme"]

console.log(person);
