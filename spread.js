let arr1 = [1, 3, 4, 5]
let arr2 = [4, 5, 6, 6]

let res = [...arr1, ...arr2].sort()
console.log = (res)

let obj = {name:'clint', hairColor:'brown'}
console.log = {age:38}

let obj3 = {...obj, ...obj2}
console.log(obj3)

let orginArr = [2, 3, 5, 6, 7]

let out = [...originArr.filter(i=>i > 4), 12]
console.log(out)
