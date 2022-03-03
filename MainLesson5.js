const names = ['Bob', 'ted', 'alex', 'fred', 100, 'alex', 'fred', 'игорь', 'Юра']

console.log(names.sort())
console.log([...names].sort())

const numbers = [55, 21, 33, 1000, 1, 0, 546, -7]
console.log([...numbers].sort())

const compareFunc = (a, b) => {
    if (a <= b) {
        return -1
    } else {
        return 1
    }
}
console.log(numbers.sort(compareFunc))
console.log(numbers.sort((a, b) => a - b))

const students = [
    {
        name: "bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
];
console.log([...students].sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1))
console.log([...students].sort((a, b) => a.age < b.age))