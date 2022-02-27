let students = [
    {
        name: 'Bob',
        age: 25,
        isMarried: false,
        scores: 100
    },
    {
        name: 'Kom',
        age: 20,
        isMarried: true,
        scores: 50
    },
    {
        name: 'Dom',
        age: 19,
        isMarried: false,
        scores: 90
    },
    {
        name: 'Lob',
        age: 22,
        isMarried: true,
        scores: 110
    }
]
//создание нового массива
const names = []
for (let i = 0; i < students.length; i++) {
    //получение данных из каждого элемента исходного массива
    const name = students[i].name
    //добавление данных в новый массив
    names[i] = name
}
console.log(names)

// isStudent: true
const trueStudents = []
//перебор исходного массива
for (let i = 0; i < students.length; i++) {
    //получение данных
    const trueStudent = {...students[i], isStudent: true}
    //добавление данных в новый массив
    trueStudents[i] = trueStudent
}
console.log(trueStudents)

function myMap(arr, callback) {
    const resultArray = []
    for (let i = 0; i < students.length; i++) {
        //получение данных из каждого элемента исходного массива
        const newData = callback(arr[i])
        //добавление данных в новый массив
        resultArray[i] = newData
    }
    return resultArray
}

console.log(myMap(students, s => s.name))
console.log(myMap(students, s => ({...s, isStudent: true})))

console.log(students.filter(s => s.scores >= 100))
console.log(myFilter(students, s => s.scores >= 100))

function myFilter(array, callback) {
    const newArr = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            newArr.push(array[i])
        }
    }
    return newArr;
}

console.log(students.find(s => s.name === 'Bob'))
console.log(myFind(students, s => s.name === 'Bob'))

function myFind(array, callback) {
    const newArr = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArr.push(array[i])
        }
    }
    return newArr
}






