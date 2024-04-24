/*
var brojcaniNiz = [1, 2, , 4, 5, "MOJE IME", 7];
var suma = 0;

for (i = 0; i < brojcaniNiz.length; i++) {
    if(brojcaniNiz[i] === undefined){
        continue;
    }
    suma += brojcaniNiz[i];
}

console.log(suma);



for (i = 0; i < brojcaniNiz.length; i++) {
    console.log(typeof (brojcaniNiz[i]));
    if (typeof (brojcaniNiz[i]) != "number") {
        continue;
    }
    console.log(i + ". je tip: " + typeof (brojcaniNiz[i]))
    suma += brojcaniNiz[i];
}

console.log(suma);


var matrix = [[1, 2, 3], ["John", "Jane", "Mike"]];

for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
        console.log("matrix[" + i + "][" + j + "] = " + matrix[i][j]);
    }
}


var myNames = ["Jane", "John", , "Mike"];

for(var myName of myNames){
    console.log(myName);
}

*/

var names = ["John", "Jane", "Bob", , "Mike"];

for (var myname of names) {
    console.log(myname);
}

names.push("Luka");
console.log(names);

var i = 0;
do {
    console.log(names[i]);
    i++;
    console.log(i);
} while (names[i] == "Jane");


var names2 = [];
for (i = 0; i < names.length; i++) {
    if (typeof(names[i]) == "undefined"){
        continue;
    }
    names2.push(names[i]);
}

console.log(names2);
console.log(names2.sort());