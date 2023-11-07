let date = new Date();
console.log(date);
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());


// creating dates:
const dt1=new Date('12-12-2023 ');
console.log(dt1);

// js date since 1970
console.log(Date.now());
console.log(dt1.getTime());

console.log(dt1.toLocaleDateString('default',{
    weekday:"long"
}));