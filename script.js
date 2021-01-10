/*---Задание 1---*/


let n = Number(prompt("Введите кол-во овец для задания 1"));
let output = "";

console.group("Задание 1");

for(let i = 1; i <= n; i++) 
{
    output += i + " овечка...";
}
console.log(output);

console.groupEnd();
