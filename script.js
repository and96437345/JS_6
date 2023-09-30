// Задание 1
// Создать массив «Список покупок». Каждый элемент массива
// является объектом, который содержит название продукта, необ-
// ходимое количество и куплен или нет. Написать несколько функ-
// ций для работы с таким массивом.
// 1. Вывод всего списка на экран таким образом, чтобы сначала
// шли некупленные продукты, а потом – купленные.
// 2. Добавление покупки в список. Учтите, что при добавлении
// покупки с уже существующим в списке продуктом, необ-
// ходимо увеличивать количество в существующей покупке,
// а не добавлять новую.
// 3. Покупка продукта. Функция принимает название продукта
// и отмечает его как купленный.

// let product1 = {
//     title: 'Хлеб',
//     quantity: 1,
//     buy: false
// }
// let product2 = {
//     title: 'Молоко',
//     quantity: 2,
//     buy: false
// }
// let product3 = {
//     title: 'Масло',
//     quantity: 3,
//     buy: true
// }
// let product4 = {
//     title: 'Кофе',
//     quantity: 2,
//     buy: false
// }

// let buyList = [product1, product2, product3, product4];

// function byListPrint(buyList) {
//     for (let i = 0; i < buyList.length; i++) {
//         if (buyList[i].buy == false) {
//             let checkBuy = 'некупленный';
//             console.log(`${buyList[i].title}: ${buyList[i].quantity}шт. ${checkBuy}`)
//         }
//     }
//     for (let i = 0; i < buyList.length; i++) {
//         if (buyList[i].buy == true) {
//             let checkBuy = 'купленный';
//             console.log(`${buyList[i].title}: ${buyList[i].quantity}шт. ${checkBuy}`)
//         }
//     }
// }

// let newProduct = {
//         title: 'Грибы',
//         quantity: 2,
//         buy: false
//     }

// function addProduct(newProduct) {
//     let find = false;
//     buyList.forEach(element => {
//         if (element.title == newProduct.title) {
//             element.quantity += newProduct.quantity;
//             find = true
//         }
//     });
//     if (find == false) {
//             buyList.push(newProduct)
//         }
// }

// function selectBuyProduct(selectProduct) {
//     buyList.forEach(element => {
//         if (element.title == selectProduct) {
//             element.buy = true;
//         }
//     });
// }
   
// byListPrint(buyList)
// addProduct(newProduct)
// console.log('')
// byListPrint(buyList)
// selectBuyProduct('Хлеб')
// console.log(``)
// byListPrint(buyList)


// Задание 2
// Создать массив, описывающий чек в магазине. Каждый эле-
// мент массива состоит из названия товара, количества и цены за
// единицу товара. Написать следующие функции.
// 1. Распечатка чека на экран.
// 2. Подсчет общей суммы покупки.
// 3. Получение самой дорогой покупки в чеке.
// 4. Подсчет средней стоимости одного товара в чеке.

// let product1 = {
//     title: 'Хлеб',
//     quantity: 1,
//     price: 40
// }
// let product2 = {
//     title: 'Молоко',
//     quantity: 2,
//     price: 62
// }
// let product3 = {
//     title: 'Масло',
//     quantity: 3,
//     price: 120
// }
// let product4 = {
//     title: 'Кофе',
//     quantity: 2,
//     price: 200
// }

// let check = [product1, product2, product3, product4];

// function checkPrint(check) {
//     for (let i = 0; i < check.length; i++) {
//             console.log(`${check[i].title}: ${check[i].quantity}шт. ${check[i].price} руб. `)
//     }
// }
// function total(check) {
//     let sum = 0;
//     check.forEach(element => {
//         sum = sum + (element.quantity*element.price)
//     });
//     console.log(`Сумма покупки: ${sum} руб.`)
// }
// function maxCost(check) {
//     let title;
//     let cost = 0;
//     check.forEach(element => {
//         if (cost < (element.quantity*element.price)) {
//             cost = (element.quantity*element.price);
//             title = element.title
//         }
//     });
//     console.log(`Самая дорогая покупка: ${title} - ${cost} руб.`)
// }
// function average(check) {
//     let sum = 0;
//     check.forEach(element => {
//         sum = sum + (element.quantity*element.price)
//     });
//     let averageCost = sum / check.length
//     console.log(`Средняя стоимость одного товара в чеке: ${averageCost} руб.`)
// }

// checkPrint(check)
// total(check)
// maxCost(check)
// average(check)

// Задание 3
// Создать массив css-стилей (цвет, размер шрифта, выравнива-
// ние, подчеркивание и т. д.). Каждый элемент массива – это объ-
// ект, состоящий из двух свойств: название стиля и значение стиля.
// Написать функцию, которая принимает массив стилей и
// текст, и выводит этот текст с помощью document.write() в тегах
// <p></p>, добавив в открывающий тег атрибут style со всеми сти-
// лями, перечисленными в массиве.

// let textColor = {
//         title: 'color',
//         property: 'orange'
// }
// let fontSize = {
//         title: 'size',
//         property: '36px'
// }
// let textAlign = {
//         title: 'align',
//         property: 'center'
// }
// let textDecoration = {
//         title: 'decoration',
//         property: 'underline'
// }
// let cssArray = [textColor, fontSize, textAlign, textDecoration]
// function showText(text, array) {
//     document.write(`<p style='color: ${array[0].property}; font-size: ${array[1].property}; text-align: ${array[2].property}; text-decoration: ${array[3].property};'>${text}</p>`)
// }
// showText('Текст для вывода', cssArray)



// Задание 4
// Создать массив аудиторий академии. Объект-аудитория со-
// стоит из названия, количества посадочных мест (от 10 до 20) и
// названия факультета, для которого она предназначена.
// Написать несколько функций для работы с ним.
// 1. Вывод на экран всех аудиторий.
// 2. Вывод на экран аудиторий для указанного факультета.
// 3. Вывод на экран только тех аудиторий, которые подходят для
// переданной группы. Объект-группа состоит из названия,
// количества студентов и названия факультета.
// 4. Функция сортировки аудиторий по количеству мест.
// 5. Функция сортировки аудиторий по названию (по алфа-
// виту).

// let auditory1 = {
//     title: 'A4',
//     places: 15,
//     faculty: 'Дизайн'
// };
// let auditory2 = {
//     title: 'A2',
//     places: 17,
//     faculty: 'Графика'
// };
// let auditory3 = {
//     title: 'A3',
//     places: 12,
//     faculty: 'Разработка ПО'
// };
// let auditory4 = {
//     title: 'A1',
//     places: 19,
//     faculty: 'Разработка WEB'
// };
// let auditories = [auditory1, auditory2, auditory3, auditory4];

// function displayAuditory(array) {
//     array.forEach(element => {
//         console.log(`Аудитория ${element.title}, мест ${element.places}, факультет ${element.faculty}`)
//     });
// }

// function displayAuditoryFaculty(titleFaculty, array) {
//     array.forEach(element => {
//         if (element.faculty == titleFaculty) {
//             console.log(`Аудитория ${element.title}`)
//         }        
//     });
// }

// let group1 = {
//     title: 'WEB31',
//     students: 19,
//     faculty: 'Разработка WEB'
// }
// function findAuditory(groupTitle, array) {
//     array.forEach(element => {
//         if (element.places >= groupTitle.students && element.faculty == groupTitle.faculty) {
//             console.log(`Аудитория ${element.title}`)
//         }
//     });
// }

// function sortAuditoryPlaces(array) {
//     array.sort(compareValue);
//     array.forEach(element => {
//         console.log(`Аудитория ${element.title}`)
//     });
// }
// function compareValue(a, b) {
//     if (a.places > b.places){
//         return 1;
//     }
//     if (a.places < b.places) {
//         return -1;
//     }
//     return 0;
// }

// function sortAuditoryTitle(array) {
//     array.sort(compareString);
//     array.forEach(element => {
//         console.log(`Аудитория ${element.title}`)
//     });
// }
// function compareString(a, b) {
//     if (a.title > b.title){
//         return 1;
//     }
//     if (a.title < b.title) {
//         return -1;
//     }
//     return 0;
// }

// displayAuditory(auditories);
// displayAuditoryFaculty("Графика", auditories);
// findAuditory(group1, auditories);
// sortAuditoryPlaces(auditories);
// sortAuditoryTitle(auditories)
