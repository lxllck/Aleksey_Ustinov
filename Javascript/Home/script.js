// Первое задание
// let name;
// let symbl = "!@#$%^&*()_+}{:>?><";
// while (true) {
//     name = prompt("Как тебя зовут?");
//     let isCorrect = true;
//     for (let i = 0; i < symbl.length; i++) {
//         if (name[i] == symbl[i]) {
//             isCorrect = false;
//         }
//     }

//     if (isCorrect == true) {
//         break;
//     }
// }
// alert ('Привет, '+ name +' !');

// Второе задание
// const year = 2023;
// let birth = prompt ("Введите ваш год рождения");
// old = year - birth;
// if ((old != 12 && old % 10 == 2 )|| (old != 13 && old % 10 == 3 )|| (old!=14 && old % 10 == 4)) {
//     alert ('Вам, '+ (old) +' года');
// }
// if (old % 10 == 1 && old !=11) {
//     alert ('Вам, '+ (old) +' год');
// }
// else alert ('Вам, '+ (old) +' лет');

// Третье задание
// let a;
// while (true) {
//         a = prompt ("Введите длину стороны квадрата");
//         let isCorrect = true;
//             if (a <= 0) {
//                 isCorrect = false;
//             }
    
//         if (isCorrect == true) {
//             break;
//         }
//     }
// alert ('Периметр квадрата равен '+ (a*4) +'.');

// Четвертое задание

// let a;
// while (true) {
//         a = prompt ("Введите радиус окружности");
//         let isCorrect = true;
//             if (a <= 0) {
//                 isCorrect = false;
//             }
    
//         if (isCorrect == true) {
//             break;
//         }
//     }
// alert ('Площадь круга равна '+ (Math.PI * a * a) +'.');

// Пятое задание

// let a;
// let t;
// while (true) {
//         a = prompt ("Введите расстояние между городами");
//         let isCorrect = true;
//             if (a <= 0) {
//                 isCorrect = false;
//             }
    
//         if (isCorrect == true) {
//             t = prompt ("Введите время в часах, за которое вы хотите добраться");
//         let is1Correct = true;
//             if (t <= 0) {
//                 is1Correct = false;
//             }
    
//         if (is1Correct == true) {
//             break;
//         }
//         }
        
//     }
// alert ('Чтобы добраться вовремя вам надо двигаться со скоростью не менее '+ (a/t) +' км/ч.');

// Шестое задание

// let a;
// const doll=0.9154;
// while (true) {
//         a = prompt ("Введите количество долларов");
//         let isCorrect = true;
//             if (a <= 0) {
//                 isCorrect = false;
//             }
    
//         if (isCorrect == true) {
//             break;
//         }
//     }
// alert (+ a + ' Долларов = '+ (doll * a) +' Евро');

// Седьмое задание

// let a;
// const v=820;
// while (true) {
//         a = prompt ("Введите объем флешки в Гб");
//         let isCorrect = true;
//             if (a <= 0) {
//                 isCorrect = false;
//             }
    
//         if (isCorrect == true) {
//             break;
//         }
//     }
// k= parseInt (a*1000/v);
// alert ('На вашу флешку поместится '+ (k) +' файлов объемом 820 мБ');

// Восьмое задание

// let k;
// let s;
// while (true) {
//         k = prompt ("Введите количество денег в вашем кошельке");
//         let isCorrect = true;
//             if (k <= 0) {
//                 isCorrect = false;
//             }
    
//         if (isCorrect == true) {
//             s = prompt ("Введите стоимость одной шоколадки");
//         let is1Correct = true;
//             if (s <= 0) {
//                 is1Correct = false;
//             }
    
//         if (is1Correct == true) {
//             break;
//         }
//         }
        
//     }
// n = parseInt (k/s);
// sdacha = k-(n*s);
// alert ('Вы сможете купить '+ (n) +' шоколадок и у вас останется '+ (sdacha) +' рублей');

// Девятое задание

// let a;
// let a1;
// let a2;
// let a3;
// while (true) {
//         a = prompt ("введите трехзначное число");
//         let isCorrect = true;
//             if (a-100 < 0 && a+100 >1099) {
//                 isCorrect = false;
//             }
    
//         if (isCorrect == true) {
//             break;
//         }
//     }
// a3 =String (a % 10) ;
// a1= String (parseInt (a / 100)) ;
// a2= String (parseInt((a-a1*100)/10)) ;
// alert (a3+a2+a1);

// Деcятое задание

// let a;
// a = prompt ("Введите любое число");
// a % 2 == 0 ? alert('Четное') : alert('Нечетное');
