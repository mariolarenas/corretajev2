
fetch('https://mindicador.cl/api').then(function(response) {
    return response.json();
}).then(function(valoresDiarios) {
    document.getElementById("UF").innerHTML = valoresDiarios.uf.valor;
    document.getElementById("DolarO").innerHTML = valoresDiarios.dolar.valor;
    document.getElementById("DolarA").innerHTML = valoresDiarios.dolar_intercambio.valor;
    document.getElementById("Euro").innerHTML = valoresDiarios.euro.valor;
    document.getElementById("IPC").innerHTML = valoresDiarios.ipc.valor;
    document.getElementById("UTM").innerHTML = valoresDiarios.utm.valor;
    document.getElementById("IVP").innerHTML =  valoresDiarios.ivp.valor;
    document.getElementById("Imacec").innerHTML =  valoresDiarios.imacec.valor;
    document.getElementById("Desempleo").innerHTML = valoresDiarios.tasa_desempleo.valor;
    document.getElementById("Bitcoin").innerHTML= valoresDiarios.bitcoin.valor;
}).catch(function(error) {
    console.log('No se conecto a la api :S verificar API', error);
    document.getElementById("mensajeError").innerHTML = "Api en Mantención!!!";
});




let fecha = new Date();
document.getElementById("fecha").innerHTML = fecha.getDate() + "/" +(fecha.getMonth()+1) + "/" + fecha.getFullYear();


/* Estos me trae la api del día de hoy 13/04/22 */

/** ValoresDiario
 * "version": "1.7.0",
    "autor": "mindicador.cl",
    "fecha": "2022-04-13T13:00:00.000Z",
    "uf": {valoresDiarioso": "uf",
        "nombre": "Unidad de fomento (UF)",
        "unidad_medida": "Pesos",
        "fecha": "2022-04-13T04:00:00.000Z",
        "valor": 31835.13
    },
    "ivp": {
        "codigo": "ivp",
        "nombre": "Indice de valor promedio (IVP)",
        "unidad_medida": "Pesos",
        "fecha": "2022-04-13T04:00:00.000Z",
        "valor": 32681.87
    },
    "dolar": {
        "codigo": "dolar",
        "nombre": "Dólar observado",
        "unidad_medida": "Pesos",
        "fecha": "2022-04-13T04:00:00.000Z",
        "valor": 806.73
    },
    "dolar_intercambio": {
        "codigo": "dolar_intercambio",
        "nombre": "Dólar acuerdo",
        "unidad_medida": "Pesos",
        "fecha": "2014-11-13T03:00:00.000Z",
        "valor": 758.87
    },
    "euro": {
        "codigo": "euro",
        "nombre": "Euro",
        "unidad_medida": "Pesos",
        "fecha": "2022-04-13T04:00:00.000Z",
        "valor": 873.37
    },
    "ipc": {
        "codigo": "ipc",
        "nombre": "Indice de Precios al Consumidor (IPC)",
        "unidad_medida": "Porcentaje",
        "fecha": "2022-03-01T03:00:00.000Z",
        "valor": 1.9
    },
    "utm": {
        "codigo": "utm",
        "nombre": "Unidad Tributaria Mensual (UTM)",
        "unidad_medida": "Pesos",
        "fecha": "2022-04-01T03:00:00.000Z",
        "valor": 55704
    },
    "imacec": {
        "codigo": "imacec",
        "nombre": "Imacec",
        "unidad_medida": "Porcentaje",
        "fecha": "2022-02-01T03:00:00.000Z",
        "valor": 6.8
    },
    "tpm": {
        "codigo": "tpm",
        "nombre": "Tasa Política Monetaria (TPM)",
        "unidad_medida": "Porcentaje",
        "fecha": "2022-04-13T04:00:00.000Z",
        "valor": 7
    },
    "libra_cobre": {
        "codigo": "libra_cobre",
        "nombre": "Libra de Cobre",
        "unidad_medida": "Dólar",
        "fecha": "2022-04-13T04:00:00.000Z",
        "valor": 4.62
    },
    "tasa_desempleo": {
        "codigo": "tasa_desempleo",
        "nombre": "Tasa de desempleo",
        "unidad_medida": "Porcentaje",
        "fecha": "2022-02-01T03:00:00.000Z",
        "valor": 7.5
    },
    "bitcoin": {
        "codigo": "bitcoin",
        "nombre": "Bitcoin",
        "unidad_medida": "Dólar",
        "fecha": "2022-04-12T04:00:00.000Z",
        "valor": 40102.2
    }
}
 */