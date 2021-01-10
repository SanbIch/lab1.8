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


/*---Задание 2---*/


let check = "";

console.group("Задание 2");

for (let i = 0; i < 16; i++)
{
    let check = !Boolean(i % 2);
    console.log(`${i} - ${check ? "четное" : "нечетное"}`);
}

console.groupEnd();
