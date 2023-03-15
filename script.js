//class

class cycle {
    cycleName = "x";

    constructor(cycleName) {
        this.cycleName = cycleName
    }
}

let cycle = new cycle('Raleigh');

console.log(myCarName);



// Distructuring

const book = { name: "Angels and Demons", price: 120, color: 'Violet', page: 280 };
const { name, price, color, page } = book;

console.log(name);

const company = {
    name: "Bkash",
    ceo: {
        id: 168613,
        share: "10 percent",
    },

    web: {
        work: "js developer",
        employee: 15,
        language: 'javascript',
        tech: {
            first: "html",
            second: 'css',
            third: "bootstrap",
            fourth: "es6"
        }

    }

}

const output = company.web.tech.third;
console.log(output);

const ceo = company.ceo?.id

console.log(ceo)


// Map

const evenNumber = [2, 4, 6, 8, 10, 12, 14, 16, 20];
const squareIt = number => number * number;
console.log(evenNumber.map(squareIt));


const names = ['Rahman', 'Akter', 'Jahan', 'Khan'];


const product = [
    { name: 'burger', price: 250, rating: 4, taste: 'spicy' },
    { name: 'sandwich', price: 200, rating: 5, taste: 'less spicy' },
    { name: 'chicken fry', price: 300, rating: 3, taste: 'sweet spicy' }
];

const showProduct = pro => console.log(pro);
product.map(showProduct)


// filter 

const even = [2, 4, 6, 8, 10, 12, 14, 16, 20];
let find = number => number % 4 == 0;

console.log(even.filter(findNumber));

let productArr = [
    { name: 'burger', price: 250, rating: 4, taste: 'spicy' },
    { name: 'sandwich', price: 200, rating: 5, taste: 'less spicy' },
    { name: 'chicken fry', price: 300, rating: 3, taste: 'sweet spicy' }
];

const findBestProduct = itemRate => itemRate.rating >= 4;

console.log(productArr.filter(findBestProduct));


// for each 

const Number = [2, 4, 6, 18, 8, 10, 12, 14, 16, 20];
evenNumber.forEach(number => console.log(number));

const product_arr = [
    { name: 'burger', price: 250, rating: 4, taste: 'spicy' },
    { name: 'sandwich', price: 200, rating: 5, taste: 'less spicy' },
    { name: 'chicken fry', price: 300, rating: 3, taste: 'sweet spicy' }
];

product_arr.forEach(pro => console.log(pro.name));


// find

const even_Number = [2, 4, 6, 18, 8, 10, 12, 14, 16, 20];

var findNumber = number => number >= 15;

console.log(even_Number.find(findNumber));
