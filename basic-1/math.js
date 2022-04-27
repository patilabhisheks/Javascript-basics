const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5))

const hello =(a,b,c) => (a*b*c)/2;
console.log(hello(2,2,8))


const fr ='abhi'
const fr1= 'patil'
const fr2='nie'

const name=['abhi','patil','nie'];
console.log(name);

console.log(name[2])
console.log(name.length);

const newlength = name.push('santosh');
console.log(name);

const popped=name.pop();

console.log(name);  


for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
  }

  for (let i = 0; i < name.length; i++) {
    const tip = calcTip(name[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
  }