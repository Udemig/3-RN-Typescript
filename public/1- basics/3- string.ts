/*
 * string (metin) dğeri. Sıklıkla kullandığımız bir type'tır;
 * string'ler bir çok alfabeden harfleri , emojileri , işaretleri
 * içeren bir veri tipidir
 */

let user_name: string = 'Ahmet';

console.log(user_name);

let paragraph: string;

// birden çok satıra sahip paragraf
paragraph = `
Burda bir makale
okuyorsuunuz
-???***
😀😀😀😀
你好你好你好
${user_name}
`;

console.log(paragraph);

// metinleri birleştirme
paragraph = 'ahmet' + 'mehmet' + 'bilal';

console.log(paragraph);
