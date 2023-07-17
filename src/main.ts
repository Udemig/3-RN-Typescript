// type anahtar kelimesi ile bir tip tanımı yapıp
// bunları farklı yerlerde kullanabiliriz

type StringOrNumber = string | number;

type objWithName = {
  name: string;
  id: StringOrNumber;
};

const printDetails = (id: StringOrNumber, item: string) => {
  document.write(`${item} ürününün id değer: ${id}`);
};

printDetails('10', 'Ütü Masası');

const greet = (user: objWithName) => {
  document.write(`${user.name} kullanıcısının id değer: ${user.id}`);
};
