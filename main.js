
const results = {
    lab1: undefined,
    lab2: undefined,
    lab3: undefined,
    lab4_5: undefined,
    lab6: undefined,
    quiz1: undefined,
    sums: undefined,
    total_score: undefined,
};

let lab1 = [5, 5, 0, 5, 5, 10, 10];
let lab2 = [5, 5, 5, 5, 5, 5, 10, ];
let lab3 = [5, 10, 10, 15];
let lab4_5 = [10, 5, 5, 5, 5, 5, 10, 10, 10, 10, 5];
let lab6 = [5, 5, 10, 5, 5, 10];
let quiz1 = 26;

results.lab1 = lab1;
results.lab2 = lab2;
results.lab3 = lab3;
results.lab4_5 = lab4_5;
results.lab6 = lab6;
results.quiz1 = quiz1;

let sum1 = 0, sum2 = 0, sum3 = 0, sum4_5 = 0, sum6 = 0;
for (let i = 0; i < lab1.length; i++) {
    sum1 = sum1 + lab1[i];
}
for (let i = 0; i < lab2.length; i++) {
    sum2 += lab2[i];
}
for (let i = 0; i < lab3.length; i++) {
    sum3 += lab3[i];
}
for (let i = 0; i < lab4_5.length; i++) {
    sum4_5 += lab4_5[i];
}
for (let i = 0; i < lab6.length; i++) {
    sum6 += lab6[i];
}
let sums = [sum1, sum2, sum3, sum4_5, sum6];
results.sums = sums;
let sums_score = sum1 + sum2 + sum3 + sum4_5 + sum6;
let total_score = 0;
total_score = sums_score * 0.6 + quiz1 * 0.4;
results.total_score = total_score;
console.log(results);