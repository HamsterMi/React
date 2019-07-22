// 1. Написать функцию loop, которая будет принимать параметры: times (значение по умолчанию = 0),
// callback (значение по умолчанию = null) и будет в цикле (times раз), вызывать функцию callback.
//  Если функция не передана, то цикл не должен отрабатывать ни разу.
//  Покажите применение этой функции

"use strict";

let lopp = (times = 0, callback = 0) => {
  if (typeof callback === "function") {
    for (let i = 0; i < times; i++) {
      callback();
    }
  } else console.log("Цикл не отработал");
};

let callbackUser = () => {
  console.log("Hello user");
};

lopp(5, callbackUser);
lopp(10);

// 2. Написать функцию calculateArea, которая будет принимать параметры,
// для вычисления площади (можете выбрать какую то конкретную фигуру, а можете,
// основываясь на переданных параметрах, выполнять требуемый алгоритм вычисления площади
// для переданной в параметрах фигуры) и возвращать объект вида: { area, figure, input },
// где area - вычисленная площадь,
// figure - название фигуры, для которой вычислялась площадь,
// input - входные параметры, по которым было произведено вычисление.

let figure1 = { name: "square", side: 5 };

let calculateArea = item => {
  let area = item.side * item.side;
  return { area, figure: item.name, input: item.side };
};

console.log(calculateArea(figure1));

// 3. Необходимо написать иерархию классов вида:
// Human -> Employee -> Developer
// Human -> Employee -> Manager
// Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников (разработчиков),
// а также методы по удалению/добавлению разработчиков.
// Каждый Разработчик (Developer) должны иметь ссылку на Менеджера и методы для изменения менеджера
// (имеется ввиду возможность назначить другого менеджера).
// У класса Human должны быть следующие параметры: name (строка), age (число), dateOfBirth (строка или дата)
// У класса Employee должны присутствовать параметры: salary (число), department (строка)
// В классе Human должен присутствовать метод displayInfo, который возвращает строку со всеми параметрами экземпляра Human.
// В классе Employee должен быть реализовать такой же метод (displayInfo), который вызывает базовый метод
// и дополняет его параметрами из экземпляра Employee
// Чтобы вызвать метод базового класса, необходимо внутри вызова метода displayInfo класса Employee написать:
// super.displayInfo(), это вызовет метод disaplyInfo класс Human и вернет строку с параметрами Human'a.

// Идея: в props будут лежать все параментры

class Human {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.dateOfBirth = props.dateOfBirth;
  }
  displayInfo() {
    return this.name + " " + this.age + " " + this.dateOfBirth;
  }
}

class Employee extends Human {
  constructor(props) {
    super(props);
    this.salary = props.salary;
    this.department = props.department;
  }
  displayInfo() {
    return super.displayInfo() + " " + this.salary + " " + this.department;
  }
}

class Manager extends Employee {
  constructor(props) {
    super(props);
    this.developers = [];
  }
  addDeveloper(newDeveloper) {
    if (!this.developers.includes(newDeveloper)) {
      this.developers.push(newDeveloper);
      console.log("сотрудник добавлен");
      return this.developers;
    } else {
      console.log("этот сотрудник уже в штате");
    }
  }

  deleteDeveloper(deletedDeveloper) {
    this.developers = this.developers.filter(
      developer => developer != deletedDeveloper
    );
    console.log("сотрудник удален из ведения");
    return this.developers;
  }
}

class Developer extends Employee {
  constructor(props) {
    super(props);
    this.leadManager = "";
  }
  changeManager(manager) {
    if (this.leadManager !== manager) {
      this.leadManager = manager;
      manager.addDeveloper(this);
      console.log("менеджер сменен");
      return this.leadManager;
    } else console.log("этот менеджер уже назначен!");
  }
}

const ANNA = {
  name: "Anna",
  age: "20",
  dateOfBirth: "12.05.09",
  salary: 20000,
  department: "HR"
};

const KOSTYA = {
  name: "KOSTYA",
  age: "30",
  dateOfBirth: "12.05.89",
  salary: 40000,
  department: "Front"
};

let humanAnna = new Human(ANNA);
let employeAnna = new Employee(ANNA);
console.log(humanAnna);
console.log(employeAnna);
let managerAnna = new Manager(ANNA);
let developerCostya = new Developer(KOSTYA);
console.log(developerCostya.displayInfo());
console.log(employeAnna.displayInfo());
console.log(humanAnna.displayInfo());

managerAnna.addDeveloper(developerCostya);
managerAnna.deleteDeveloper("Костя");
developerCostya.changeManager(managerAnna);
developerCostya.changeManager(managerAnna);
