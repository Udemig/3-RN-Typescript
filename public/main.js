"use strict";
// type anahtar kelimesi ile bir tip tanımı yapıp
// bunları farklı yerlerde kullanabiliriz
const printDetails = (id, item) => {
    document.write(`${item} ürününün id değer: ${id}`);
};
printDetails('10', 'Ütü Masası');
const greet = (user) => {
    document.write(`${user.name} kullanıcısının id değer: ${user.id}`);
};
