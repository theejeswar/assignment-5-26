//print the numbers in reverse order
for (var i = 10; i >= 0; i--) {
    console.log(i);
}

//write a program to have the count of values, divisible by 5
var arr = [12, 20, 24, 35, 40, 52, 65];
for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 5 == 0) {
        console.log(arr[index]);
    }
}

//in a given number, print the numbers which are divisible by 2 & 5
var y = 30;
for (var x = 0; x <= y; x++) {
    if ((x % 2 == 0) && (x % 5 == 0)) {
        console.log(x);
    }
}

//write a function to count  0,1 in an array of [0,1,1,1,0,0,0,0,1,1,1,1]
var a = [0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1];
function f(a) {
    var count0 = 0;
    var count1 = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] == 0) {
            count0++;
        } else {
            count1++
        }
    }
    return [count0, count1];
}
var out = f(a);
console.log(out);


//replace negative number with o in an array
function replace(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] = 0;
        }
    }
    return array;
}
var array = [2, -15, -92, 63, -88, -74];
var output = replace(array);
console.log(output);

//swapping 2 elements in an  array
function swap(b) {
    var n1 = 0;
    var n2 = 1;
    for (var i = 0; i < b.length; i++) {
        n1 = b[i];
        n2 = b[i + 1];
        b[i] = n2;
        b[i + 1] = n1;
        i++;
    }
    return b;
}
var b = [1, 2, 3, 4, 5, 6];
var output1 = swap(b);
console.log(output1);

//write a program to print negative numbers in array
var c = [-3, 6, -1, 5, -9, 9, 11, -12];
for (var i = 0; i < c.length; i++) {
    if (c[i] < 0) {
        console.log(c[i]);
    } else {
        console.log(c[i]);
    }
}
