// Crea 10 oggetti che rappresentano una zucchina
// Inserisco tutto in un Array 
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
]

var pesoZucchine = 0;

// Calcola quanto pesano tutte le zucchine.
for (var i = 0; i < listaZucchine.length; i++) {

    var zucchina = listaZucchine[i];

    // console.log(zucchina.peso);

    pesoZucchine = pesoZucchine + zucchina.peso;
}

console.log("Il peso totale di tutte le zucchine è: " + pesoZucchine);
