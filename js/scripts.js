console.log('That was it');

var a = 1;
var b = 2;
console.log(a + b);

var c = a + b;
console.warn(c);

if (a < b) {
    console.log('a is lesser than b');
}

if (a < b) {  
    /* do the following things 
    if a is lesser than b */

    /* this is a comment for the lazies (option + shift + A) */
    console.log(a + ' is lesser than ' + b);
} else {
    /* do the following 
    things otherwise */
    console.log('a is greater than b');
}
if (a < b) {
    console.log('a is lesser than b');
}
if (a === 1) {
    console.log('a is exactly one');
}