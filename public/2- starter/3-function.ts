let selamla: Function;

// selamla = "mehmet"

selamla = () => {
  console.log('Tekrar Hoşgeldiniz!!');
};

selamla();

// birden fazla parametreye sahip fonk
const add = (a: number, b: number, c?: number) => {
  console.log(a + b);
  console.log(c);
};

add(5, 90);

// fonksiyonlarda return edilen değerin tipini belirleme
const minus = (a: number, b: number): number => {
  return a - b;
};

console.log(minus(90, 6));
