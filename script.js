'use strict';

let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};


for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');
	
	if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
	  && a != '' && b != '' && a.length < 50){
		console.log('done');
		appData.expenses[a] = b;
	} else {
		alert("Введите корректные данные");
		i--;

	}	 
	
};

// WHILE 

// let i = 0;
// while (i < 2){
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 		b = +prompt("Во сколько обойдется?", '');
	
// 	if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
// 	  && a != '' && b != '' && a.length < 50){
// 		console.log('done');
// 		appData.expenses[a] = b;
// 		i++;
// 	} else {
		// console.log("Введите корректные данные");
		// i--;
// 	}	 
// };

// DO...WHILE

// let i = 0;
// do {
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 		b = +prompt("Во сколько обойдется?", '');
	
// 	if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
// 	  && a != '' && b != '' && a.length < 50){
// 		console.log('done');
// 		appData.expenses[a] = b;
// 		i++;
// 	} else {
		// console.log("Введите корректные данные");
		// i--;
// } 
// } while(i < 2);

appData.MoneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.MoneyPerDay);

if(appData.MoneyPerDay < 100){
	console.log("Низкий уровень достатка");
} else if (appData.MoneyPerDay > 200 && appData.MoneyPerDay < 2000) {
	console.log("Средний уровень достатка");
} else if (appData.MoneyPerDay > 2000) {
	console.log("Высокий уровень достатка");
};