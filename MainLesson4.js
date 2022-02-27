const todoListID_1 = '55354-jl'
const todoListID_2 = '22wdsoe-jl'

const todoList = [
    {
        id: '55354-jl',
        title: "What to learn",
        filter: 'all',
    },
    {
        id: '22wdsoe-jl',
        title: "What to buy",
        filter: 'all',
    }
]

const tasks = {
    [todoListID_1]: [
        {title: 'HTML', isDune: true},
        {title: 'CSS', isDune: true},
        {title: 'React', isDune: false}
    ],
    [todoListID_2]: [
        {title: 'Water', isDune: true},
        {title: 'Bread', isDune: true},
        {title: 'Monik', isDune: false}
    ]
}
console.log(tasks[todoListID_1][2].title) //'React'
let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
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
        scores: 100
    }
];
const arr = [1, 2, 3, 4, 5, 6]
console.log(arr.reduce((sum, el) => sum + el, 0))
console.log(arr.reduce((max, el) => max > el ? max : el, 0))
console.log(students.reduce((acc, st) => acc + st.scores, 0))
console.log(students.reduce((acc, st) => {
    if (!st.isMarried){
        acc.push(st)
    }
    return acc
}, []))
console.log(students.reduce((acc,st)=> st.isMarried ? [...acc,st]: acc,[]))
console.log(students.reduce((acc,st)=> [...acc,st], []))
console.log(students.reduce((acc,el)=>{
    acc[el.name] = el.scores
    return acc
} , {}))



