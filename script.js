
// Не меняя структуры объектов использовать каждый метод объекта calculations так, чтобы:

var calculations = {
    salasySum: function() {
        return this.reduce(function(acc, next) {
            return acc + next;
        }, 0);
    },
    logName: function() {
        this.forEach(function(user) {
            console.log(user.name);
        });
    },
    findUsersByIds: function(ids) {
        return this.filter(function(user) {
            return ids.find(function(id) {
                return user.id === id;
            })
        });
    }
};

var users = [
    {
        id: 1,
        name: "User 2",
        salary: 200
    },
    {
        id: 2,
        name: "User 3",
        salary: 200
    },
    {
        id: 3,
        name: "User 4",
        salary: 200
    }
];

// salarySum вернул сумму всех зарплат пользователей в массиве
const salaries = users.map(function (user) {
    return user.salary;
})
console.log(salaries);
console.log(calculations.salasySum.call(salaries));

// logName вывел имена всех пользователей из массива в консоль
calculations.logName.call(users);

// findUsersByIds возвращал массив пользователей в соответствии с массивом id переданных в метод
const ids = [2, 1];
console.log(ids);
console.log(calculations.findUsersByIds.call(users, ids));