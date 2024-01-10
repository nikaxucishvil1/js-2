//1)
//დაწერეთ პატარა ბიოგრაფია თქვენს შესახებ და მაქსიმალურად ჩაშალეთ ცვლადებად და console-ში უნდა მივიღო სრული ტექსტი
//მაგალითად უნდა შეიცავდეს ინფორმაციას(firstName, lastName, age, job, skills,address) გამოიყენეთ template literal მიდგომა

//answer:
// let firstName = 'Nika'
// let lastName = 'khutsishvili'
// let age = 16
// let job = false
// let skills = 'junior front-end developer:HTML CSS '
// let address = 'Rustavi'

// let introducing = `hello my name is ${firstName} and my last name is ${lastName} `
// console.log (introducing + `I'm ${age} years old. Job:${job} my skills are ${skills} if you are interesed you can find me on my adress: ${address}`)
// //2)
//დაწერეთ პროგრამა, რომელიც იყენებს ლოგიკურ ოპერატორებს (&&, ||, ! ===)
//იმის დასადგენად, არის თუ არა მოცემული წელი 2023 ან უკვე 2024; რამენაირად გამოთვალეთ და დაწერეთ ლოგიკა
// ყველა ინფივიდულაურად დაწერეს წესით!!

//answer:
// 1) let age = 16
// let birthAge = 2007
// let CurrentYearIs2024 = birthAge > age || age <= birthAge
// console.log(CurrentYearIs2024)

// 2) let age = 16
// let birthAge = 2007
// let CurrentYearIs2024 = age > birthAge
// console.log (!CurrentYearIs2024)

//3)ააწყვეთ პატარა counter ლოგიკა სადაც გამოიყენებთ მაგალითად let x = 10; x++, x-- რომლის მიხედვითაც increment ერთ
// console-ში მეორე console-ში კი decrement!!
// let x = 10
// x++
// console.log(x)
// x--
// console.log(x)
//4)
// let a = 10;
// let b = 12;
//
// let andOperator = a < 9 && b >= 11; //result --> false (ორივე არ შესრულდა): 
// let orOperator = a > 11 0 || b < 10; //result --> false (არცერთი არ შესრულდა) :
// let notOperator = !(a > 10); //result --> true :
