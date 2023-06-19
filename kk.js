        let month = prompt ('какой сейчас месяц')
        if (month == 12 || month == 1 || month == 2) {alert("зима")}
        else if(month >=3 && month <=5 ) {alert("весна")}
         else if (month >=6 && month <=8 ) {alert('лето')}
         else {alert ('осень')}

         let day = prompt('Введите дату:');
 
if(day >= 0 && day <= 10) {
    alert('Это первая декада');
}
else if(day >=11 && day <=20) {
    alert('Это вторая декада');
}
else if(day >= 21 && day <= 32) {
    alert('Это третья декада');
}

    