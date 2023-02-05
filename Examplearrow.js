//Examples under Arrow function topic
const author = {
    fullName: "Bob Alice",
    books: [],
    printBooks() {
    this.books.forEach(book => console.log(book + 'by ' +this.fullName));
    }
    };

/*const squares = numbers.map(n => n*n);

numbers.forEach(n =>{
    if ( n % 2 === 0) {
        evens.push(n);
    }
});*/
