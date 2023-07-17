/*
 * Any :
 * değişkenin herhangi bir tiple
 * sınırlanmadığı anlamına gelir
 * any tipine sahip bir değişkene istediğimiz
 * tipte (string/number...) veri atayabiliyoruz
 ? nerelerde kullanıyoruz? 
 * değerlerinin tipine henüz karar vermediğimiz
 * veya api'den gelen ve değerini bilmediğimiz
 * değişkinlerde any tipini kullanılır
 */

let age: any = 35;

age = 'ali';
age = 90;
age = true;

// karışık dizi tanımalam
let mixed: any[] = [];
mixed.push('methmet');
mixed.push(90);
mixed.push(false);
mixed.push({});
mixed.push([]);
console.log(mixed);

// objelerde any
let person: {
  name: any;
  age: any;
};
