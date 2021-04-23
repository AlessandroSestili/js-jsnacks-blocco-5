//Crea 10 oggetti che rappresentano una zucchina.
var listaZucchine = [
    {
        varietà: "campagnola",
        peso: 100,
        lunghezza: 10
    },

    {
        varietà: "rossiccia",
        peso: 200,
        lunghezza: 20
    },

    {
        varietà: "barbosa",
        peso: 300,
        lunghezza: 30
    },

    {
        varietà: "sinerga",
        peso: 350,
        lunghezza: 34
    },

    {
        varietà: "intrepida",
        peso: 120,
        lunghezza: 14
    },

    {
        varietà: "romana",
        peso: 390,
        lunghezza: 70
    },

    {
        varietà: "salmastra",
        peso: 400,
        lunghezza: 22
    },

    {
        varietà: "campagnola",
        peso: 180,
        lunghezza: 9
    },

    {
        varietà: "innocente",
        peso: 80,
        lunghezza: 100
    },

    {
        varietà: "campagnola",
        peso: 700,
        lunghezza: 55
    },
];

// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
var zucchineOver15 = [];
var zucchineUnder15 = [];

for (var i = 0; i < listaZucchine.length; i++) {

    var zucchina = listaZucchine[i];

    if(zucchina.lunghezza >= 15) {
        zucchineOver15.push(zucchina)
    } else {
        zucchineUnder15.push(zucchina)
    }
}

console.log("Queste sono le zucchine più lunghe di 15cm: " , zucchineOver15);
console.log("Queste sono le zucchine più corte di 15cm: " , zucchineUnder15);

// Infine stampa separatamente quanto pesano i due gruppi di zucchine.
var pesoZucchineOver15 = 0;
for (var j = 0; j < zucchineOver15.length; j++) {

    var zucchina = zucchineOver15[j];

    pesoZucchineOver15 += zucchina.peso;
}

var pesoZucchineUnder15 = 0;
for (var z = 0; z < zucchineUnder15.length; z++) {

    var zucchina = zucchineUnder15[z];

    pesoZucchineUnder15 += zucchina.peso;
}
console.log("****************************************");
console.log("Questo è il peso delle zucchine più lunche di 15cm: " + pesoZucchineOver15);
console.log("Mentre questo è il peso delle zucchine più corte di 15cm: " + pesoZucchineUnder15);
