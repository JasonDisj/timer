const beeping = () => {   // DON'T need (num) as parameter, the function of beeping is only to be beeping
  process.stdout.write('\x07');
};

const number = process.argv.slice(2);  // node timer1.js 10 3 5 15 9
for (let num of number) {
  if (num !== NaN && num >= 0) {
    setTimeout(beeping, num * 1000);
  }
}