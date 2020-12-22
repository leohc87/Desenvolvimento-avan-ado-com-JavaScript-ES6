var sumOld = function (a, b) 
{
    return a + b;
};

//Arrow function

var  sum = (a, b) => {
    var x = 10;
    if (a > b) {

    } 
    return a +b;
}
console.log(sum(5, 5));

//ex

function Car() {
    this.foo = 'bar'
}
console.log(new Car());

//exAF
var Car = () => {
    this.foo = 'bar'
};

console.log(new Car());

// exAF
log('teste');

var log = value => {
    console.log(value);
}

//exAF
var obj = {
    showContext: function showContext() {
        setTimeout(() => {
            this.log('after 1000ms');
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();