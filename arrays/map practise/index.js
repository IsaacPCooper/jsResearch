// Create food objects
const foods = [
    {
        name: '🍎',
        type: 'fruit',
        texture: 'crunchy'
    },
    {
        name: '🥕',
        type: 'vegetable',
        texture: 'crunchy'
    },
    {
        name: '🍒',
        type: 'fruit',
        texture: 'soft'
    },
    {
        name: '🍉',
        type: 'fruit',
        texture: 'soft'
    },
    {
        name: '🥦',
        type: 'vegetable',
        texture: 'crunchy'
    },
]


// using map + filter, sort food types onto "shelfs"
const foodShelf = foods.map(foods => foods.name);

const veggies = foods.filter(foods => foods.type === 'vegetable');
const veggieShelf = veggies.map(veggies => veggies.name);

const fruits = foods.filter(foods => foods.type === 'fruit');
const fruitShelf = fruits.map(fruits => fruits.name);

console.log(foodShelf);
console.log(fruitShelf);
console.log(veggieShelf);

