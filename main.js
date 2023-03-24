let action = prompt("Що ви хоче зробити (add, sub, mult, div)");
if (action) {
} else {
  confirm("Шкода, що Ви не захотіли скористатися калькулятором");
}

const numberA = Number(prompt("Перше число"));
const numberB = Number(prompt("Друге число"));

switch (action) {
  case "add":
    alert(numberA + numberB);
    console.log(add);
    break;


  case "sub":
    alert(numberA - numberB);
    console.log(sub);
    break;


  case "mult":
    alert(numberA * numberB);
    console.log(mult);
    break;

  case "div":
    alert(numberA / numberB);
    console.log("div");
    break;
  default:
    alert("Спробуйте ще раз");
    break;
}
