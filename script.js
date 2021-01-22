'use strict';

let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money) || money == '' || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}
//start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true,
	chooseExpenses: function(){
		for (let i = 0; i < 2; i++) {
			let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
				b = +prompt("Во сколько обойдется?", '');
			
			if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
			  && a != '' && b != '' && a.length < 50){
				console.log('done');
				appData.expenses[a] = b;
			} else {
				alert("Введите корректные данные");
				i--;
		
			}	 
			
		}
	},
	detectDayBudget: function(){
		appData.MoneyPerDay = (appData.budget / 30).toFixed(1); // toFixed return STRING!!!
        alert("Ежедневный бюджет: " + appData.MoneyPerDay + "руб.");
	},
	detectLevel: function(){
		if(appData.MoneyPerDay < 100){
			console.log("Низкий уровень достатка");
		} else if (appData.MoneyPerDay > 200 && appData.MoneyPerDay < 2000) {
			console.log("Средний уровень достатка");
		} else if (appData.MoneyPerDay > 2000) {
			console.log("Высокий уровень достатка");
		}
	},
	checkSavings: function(){
		if(appData.savings == true) {
			let save = +prompt("Какова сумма накоплений?"),
				persent = +prompt("Какой процент?");
	
			appData.monthIncome = save/100/12*persent;
			alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);	
		}
	},
	chooseOptExpenses: function(){
		for(let i = 1; i <= 3; i++){
			let question = prompt("Статья необязательных расходов?");
			appData.optionalExpenses[i] = question;
			console.log(appData.optionalExpenses); 
		}
	},
	cooseIncome: function(){
		let items = prompt('Что принесет дополнительный доход? (Через запятую)', '');

		if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
		}
		appData.income.forEach(function(itemmas, i){
			alert("Способы доп. заработка: " + (i+1) + "-" + itemmas);
		});
	}
		
};

for(let key in appData){
	console.log("Наша программа включает в себя данные: " + key + "-" + appData[key]);
}
