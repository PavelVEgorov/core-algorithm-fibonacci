// Релиз 0. Итерационный подсчет n-го числа Фибоначчи

let iterativeFibonacci = (el) => {
  let prev = 0;
  let one = 1;

  for(let i = 1; i < el; i++) {
    let result = prev + one;
    prev = one;
    one = result;
    }
    return one;
}

console.log(iterativeFibonacci(10));

module.exports = {iterativeFibonacci};
