const data = require('./data.json');

const isArrayCheck = (arr) => {
    if (Array.isArray(arr) && arr.length > 0) {
        return true
    } else {
        return false
    }
}

const task11Result = (animals) => {
    const result = {
        dogs: 0,
        cats: 0,
        avgage: 0
    };
    if (!isArrayCheck(animals)) {
        return result
    }
    let generalAge = 0
    animals.forEach(item => {
        if (item.type === 'cat') {
            result.cats++
            generalAge += item.age
        }
        // добавил вторую проверку на случай если в массиве animals окажутся другие типы животных
        if (item.type === 'dog') {
            result.dogs++
            generalAge += item.age
        }
    })
    result.avgage = Math.floor(generalAge / (result.dogs + result.cats))
    return result;
};

console.log(task11Result(data));

const task12Result = (animals) => {
    // Смутило то что в исходном коде все result объявлены как const, но после этого примера
    // где как const была объявлена переменная примитивного типа, решил , что никакой скрытой нагрузки
    // такое объявление не несёт и можно поправить на let.
    let result = 0;
    if (!isArrayCheck(animals)) {
        return result
    }
    animals.forEach(item => {
        if (item.type === 'dog' && item.breed && item.features.includes("black")) {
            result++
        }
    })
    return result;
};

console.log(task12Result(data));

const task13Result = (animals) => {
    let result = [];
    if (!isArrayCheck(animals)) {
        return result
    }
    result = animals.filter(item => (item.type === 'cat' && item.features.includes("black"))
        | (item.type === 'dog' && item.features.includes("white")))
    return result;
};

console.log(task13Result(data));

const task14Result = (animals) => {
    let result = [];
    if (!isArrayCheck(animals)) {
        return result
    }
    let cats = animals.filter(item => item.type === 'cat')
    let dogs = animals.filter(item => item.type === 'dog')
    cats.sort((a, b) => {
        return b.age - a.age
    })
    dogs.sort((a, b) => {
        return a.age - b.age
    })
    result = [...cats, ...dogs]
    return result;
};

console.log(task14Result(data));

const myPowFunc = (number, n) => {
    let result = number;
    // Исходил из того предположения, что ноль в нулевой степени равен 1
    if (n === 0) {
        return 1
    }
    if (number === 0) {
        return 0
    }
    const count = Math.abs(n);
    for (let index = 0; index < count - 1; index++) {
        result *= number;
    }
    if (n < 0) {
        return 1 / result;
    } else {
        return result;
    }
};

console.log(myPowFunc(3, 4));

const myFlatFunc = (inputArray) => {
    let result = [];
    if (!isArrayCheck(inputArray)) {
        return result
    }
    inputArray.forEach(item => {
        if (Array.isArray(item)) {
            result = result.concat(myFlatFunc(item))
        } else {
            result.push(item)
        }
    })
    return result;
};

console.log(myFlatFunc([1, 3, 5, [1, [4, 5], 'asdf', [76, [56, [66, 59]]]]]));
// result 1, 3, 5, 1, 4, 5, 'asdf', 76, 56, 66, 59
