var local = {
    vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],

    ventas: [
        { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
        { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
        { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"] },
        { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
        { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
    ],

    precios: [
        { componente: "Monitor GPRS 3000", precio: 200 },
        { componente: "Motherboard ASUS 1500", precio: 120 },
        { componente: "Monitor ASC 543", precio: 250 },
        { componente: "Motherboard ASUS 1200", precio: 100 },
        { componente: "Motherboard MZI", precio: 30 },
        { componente: "HDD Toyiva", precio: 90 },
        { componente: "HDD Wezter Dishital", precio: 75 },
        { componente: "RAM Quinston", precio: 110 },
        { componente: "RAM Quinston Fury", precio: 230 }
    ]
};


//Parte 1a
function precioMaquina(componentes) {
    var precioTotal = 0;

    for (var i = 0; i < componentes.length; i++) {

        for (var j = 0; j < local.precios.length; j++) {

            if (local.precios[j].componente === componentes[i]) {
                precioTotal += local.precios[j].precio;

            }
        }

    }
    return precioTotal;
}

console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]));
console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]));
console.log(precioMaquina(["Monitor ASC 543", "Motherboard MZI"]));
console.log(precioMaquina(["Monitor ASC 543", "Motherboard ASUS 1200"]));
console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1200"]));

// //Parte 1b

function cantidadVentasComponente(componente) {
    var countUnits = 0;

    for (var i = 0; i < local.ventas.length; i++) {

        for (var j = 0; j < local.ventas[i].componentes.length; j++) {

            if (local.ventas[i].componentes[j] === componente) {
                countUnits += 1;

            }
        }
    }
    return countUnits;
}


console.log("Resultado funcion cantidadVentasComponente ",cantidadVentasComponente("Monitor GPRS 3000")); //3
console.log("Resultado funcion cantidadVentasComponente ",cantidadVentasComponente("Motherboard ASUS 1500")); //2
console.log("Resultado funcion cantidadVentasComponente ",cantidadVentasComponente("Monitor ASC 543")); //2
console.log("Resultado funcion cantidadVentasComponente ",cantidadVentasComponente("Motherboard ASUS 1200")); //2
console.log("Resultado funcion cantidadVentasComponente ",cantidadVentasComponente("Motherboard MZI")); //1
console.log("Resultado funcion cantidadVentasComponente ",cantidadVentasComponente("HDD Toyiva")); //0
console.log("Resultado funcion cantidadVentasComponente ",cantidadVentasComponente("HDD Wezter Dishital")); //0
console.log("Resultado funcion cantidadVentasComponente ",cantidadVentasComponente("RAM Quinston")); //0
console.log("Resultado funcion cantidadVentasComponente ",cantidadVentasComponente("RAM Quinston Fury")); // 0

//Parte 1c - Opcion hardcodeada

// function vendedoraDelMes(mes, anio) {
//     var vendedoraGrace = 0;
//     var vendedoraAda = 0;
//     for (var i = 0; i < local.ventas.length; i++) {

//         var month = local.ventas[i].fecha.getMonth();
//         var year = local.ventas[i].fecha.getFullYear();

//         if (month + 1 === mes && year === anio && local.ventas[i].nombreVendedora === "Grace") {
//             vendedoraGrace += precioMaquina(local.ventas[i].componentes)
//         } else if (month + 1 === mes && year === anio && local.ventas[i].nombreVendedora === "Ada") {
//             vendedoraAda += precioMaquina(local.ventas[i].componentes)
//         }
//     }
//     if (vendedoraGrace > vendedoraAda) {
//         return ("Grace")
//     } else {
//         return ("Ada")
//     }
// }


// console.log(vendedoraDelMes(1, 2019)); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)

//Parte 1c solucion B
function vendedoraDelMes(mes, anio) {

    var ventasTotales = [];


    for (var b = 0; b < local.vendedoras.length; b++) {
        var objetoNuevo = {
            nombre: "",
            ventas: 0,
        }

        objetoNuevo.nombre = local.vendedoras[b];

        for (var e = 0; e < local.ventas.length; e++) {

            var month = local.ventas[e].fecha.getMonth();
            var year = local.ventas[e].fecha.getFullYear();

            if (month + 1 === mes && year === anio) {

                if (local.vendedoras[b] === local.ventas[e].nombreVendedora) {

                    if (objetoNuevo.nombre === local.vendedoras[b]) {
                        objetoNuevo.ventas += precioMaquina(local.ventas[e].componentes);
                    }

                }
            }
        }

        ventasTotales.push(objetoNuevo)
    }

    ventasTotalesMax = 0;
    vendedoraMax = 0;

    for (r = 0; r < ventasTotales.length; r++) {

        if (ventasTotales[r].ventas > ventasTotalesMax) {
            ventasTotalesMax = ventasTotales[r].ventas;
            vendedoraMax = ventasTotales[r].nombre;

        }
    }

    return vendedoraMax;

}

console.log("La vendedora del mes es ", vendedoraDelMes(1, 2019)); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)

//Parte 1d

function ventasMes(mes, anio) {
    var ventasDelMes = 0;

    for (var i = 0; i < local.ventas.length; i++) {

        var month = local.ventas[i].fecha.getMonth();
        var year = local.ventas[i].fecha.getFullYear();

        if (month + 1 === mes && year === anio) {
            ventasDelMes += precioMaquina(local.ventas[i].componentes)
        }
    }
    return ventasDelMes;
}

console.log("Resultado funcion ventasMes ", ventasMes(1, 2019)); // 1250
console.log("Resultado funcion ventasMes ",ventasMes(2, 2019)); // 320

//Parte 1e

function ventasVendedora(nombre) {
    var ventasVendedora = 0;

    for (var i = 0; i < local.ventas.length; i++) {
        if (local.ventas[i].nombreVendedora === nombre) {
            ventasVendedora += precioMaquina(local.ventas[i].componentes)
        }
    }

    return ventasVendedora
}

console.log("Resultado funcion ventasVendedora ",ventasVendedora("Grace")); // 900
console.log("Resultado funcion ventasVendedora ",ventasVendedora("Ada")); // 670

//Parte 1f

function componenteMasVendido() {
    var arrayCantMasVendidos = [];
    var arrayMasVendidos = [];

    for (var i = 0; i < local.precios.length; i++) {
        arrayCantMasVendidos.push(cantidadVentasComponente(local.precios[i].componente));
        arrayMasVendidos.push(local.precios[i].componente)
    }
    var indexItemMasVendido = arrayCantMasVendidos.indexOf(Math.max.apply(null, arrayCantMasVendidos));
    return arrayMasVendidos[indexItemMasVendido];
}

console.log("Resultado funcion componenteMasVendido ",componenteMasVendido()); // Monitor GPRS 3000

//Parte 1g

function huboVentas(mes, anio) {
    var huboVentas = ventasMes(mes, anio)

    if (huboVentas != 0) {
        return true
    } else {
        return false
    }
}

console.log("Resultado funcion huboVentas - hubo ventas en cierto mes? ",huboVentas(3, 2019)); // false

//Parte 2
//Parte 2b
//Agregar al objeto principal la propiedad sucursales: ['Centro', 'Caballito']

local["sucursal"] = ["Centro", "Caballito"];

//Parte 2a
//En las ventas ya existentes, tenemos que agregar la propiedad sucursal con el valor Centro (ya que es la sucursal original).
for (var i = 0; i < local.ventas.length; i++) {
    local.ventas[i]["sucursal"] = "Centro";
}

//console.log(local.ventas);

//Parte 2c
//Cargar la siguiente información en el array ventas, creando sus respectivos objetos siguiendo el patrón: 
//fecha, nombreVendedora, componentes, sucursal

function NewVenta(fecha, nombreVendedora, componentes, sucursal) {
    this.fecha = fecha,
        this.nombreVendedora = nombreVendedora,
        this.componentes = componentes,
        this.sucursal = sucursal
}

var1 = new NewVenta(new Date(2019, 1, 12), "Hedy", ["Monitor GPRS 3000", "HDD Toyiva"], "Centro");
var2 = new NewVenta(new Date(2019, 1, 24), "Sheryl", ["Motherboard ASUS 1500", "HDD Wezter Dishital"], "Caballito");
var3 = new NewVenta(new Date(2019, 1, 1), "Ada", ["Motherboard MZI", "RAM Quinston Fury"], "Centro");
var4 = new NewVenta(new Date(2019, 1, 11), "Grace", ["Monitor ASC 543", "RAM Quinston"], "Caballito");
var5 = new NewVenta(new Date(2019, 1, 15), "Ada", ["Motherboard ASUS 1200", "RAM Quinston Fury"], "Centro");
var6 = new NewVenta(new Date(2019, 1, 12), "Hedy", ["Motherboard ASUS 1500", "HDD Toyiva"], "Caballito");
var7 = new NewVenta(new Date(2019, 1, 21), "Grace", ["Motherboard MZI", "RAM Quinston"], "Centro");
var8 = new NewVenta(new Date(2019, 1, 8), "Sheryl", ["Monitor ASC 543", "HDD Wezter Dishital"], "Centro");
var9 = new NewVenta(new Date(2019, 1, 16), "Sheryl", ["Monitor GPRS 3000", "RAM Quinston Fury"], "Centro");
var10 = new NewVenta(new Date(2019, 1, 27), "Hedy", ["Motherboard ASUS 1200", "HDD Toyiva"], "Caballito");
var11 = new NewVenta(new Date(2019, 1, 22), "Grace", ["Monitor ASC 543", "HDD Wezter Dishital"], "Centro");
var12 = new NewVenta(new Date(2019, 1, 5), "Ada", ["Motherboard ASUS 1500", "RAM Quinston"], "Centro");
var13 = new NewVenta(new Date(2019, 1, 1), "Grace", ["Motherboard MZI", "HDD Wezter Dishital"], "Centro");
var14 = new NewVenta(new Date(2019, 1, 7), "Sheryl", ["Monitor GPRS 3000", "RAM Quinston"], "Caballito");
var15 = new NewVenta(new Date(2019, 1, 14), "Ada", ["Motherboard ASUS 1200", "HDD Toyiva"], "Centro");


local.ventas.push(var1);
local.ventas.push(var2);
local.ventas.push(var3);
local.ventas.push(var4);
local.ventas.push(var5);
local.ventas.push(var6);
local.ventas.push(var7);
local.ventas.push(var8);
local.ventas.push(var9);
local.ventas.push(var10);
local.ventas.push(var11);
local.ventas.push(var12);
local.ventas.push(var13);
local.ventas.push(var14);
local.ventas.push(var15);


//Parte 2d

function ventasSucursal(sucursal) {
    var tienda = 0;

    for (var m = 0; m < local.ventas.length; m++) {

        if (local.ventas[m].sucursal === sucursal) {

            tienda += precioMaquina(local.ventas[m].componentes);
        }

    }
    return tienda;
}
console.log("Resultado funcion ventasSucursal ",ventasSucursal("Centro")); // 4195
console.log("Resultado funcion ventasSucursal ",ventasSucursal("Caballito")); // 1265

//VENTAS TOTALES - control mio
// for (var d = 0; d < local.ventas.length; d++) {
//     for (var e = 0; e < 1; e++) {
//         console.log(precioMaquina(local.ventas[d].componentes))
//     }
// }

//Parte 2e

//Las funciones ventasSucursal y ventasVendedora tienen mucho código en común, ya que es la misma funcionalidad pero 
//trabajando con una propiedad distinta. Entonces, ¿cómo harías para que ambas funciones reutilicen código y evitemos repetir?

//Ambas dos recorren ventas, reciben un string como parametro y llaman a la funciona PrecioMaquina y su resultado lo suman
//a una variable, o tienda o vendedora y retornan el resultado de esa variable


// function ventasSucursalVendedora(string) {
//     var total = 0;

//     for (var i = 0; i < local.ventas.length; i++) {

//         if (local.ventas[i].sucursal === string || local.ventas[i].nombreVendedora === string) {

//             total += precioMaquina(local.ventas[i].componentes);
//         }

//     }
//     return total;
// }

// console.log(ventasSucursalVendedora("Centro")); //4195
// console.log(ventasSucursalVendedora("Caballito")); //1265
// console.log(ventasSucursalVendedora("Ada")); // antes 670 ahora 1680
// console.log(ventasSucursalVendedora("Grace")); // antes 900 ahora 1830
// console.log(ventasSucursalVendedora("Sheryl")); // 1260
// console.log(ventasSucursalVendedora("Hedy")); // 690

//Parte 2f 


function sucursalDelMes(mes, anio) {

    var sucursales = [];

    for (var i = 0; i < local.ventas.length; i++) {
        if (sucursales.indexOf(local.ventas[i].sucursal) === -1) {
            sucursales.push(local.ventas[i].sucursal)
        }
    }

    var sucursalesTotal = [];

    for (var b = 0; b < sucursales.length; b++) {
        var objetoNuevo = {
            sucursal: "",
            ventas: 0,
        }

        objetoNuevo.sucursal = sucursales[b];

        sucursalesTotal.push(objetoNuevo);
    }

    for (var e = 0; e < local.ventas.length; e++) {
        var month = local.ventas[e].fecha.getMonth();
        var year = local.ventas[e].fecha.getFullYear();

        if (month + 1 === mes && year === anio) {
            for (var t = 0; t < sucursalesTotal.length; t++) {
                if (local.ventas[e].sucursal === sucursalesTotal[t].sucursal) {
                    sucursalesTotal[t].ventas += precioMaquina(local.ventas[e].componentes)
                }
            }
        }

    }

    sucursalTotalesMax = 0;
    sucursalMax = 0;

    for (r = 0; r < sucursalesTotal.length; r++) {

        if (sucursalesTotal[r].ventas > sucursalTotalesMax) {
            sucursalTotalesMax = sucursalesTotal[r].ventas;
            sucursalMax = sucursalesTotal[r].sucursal;
            
        }
    }

    return sucursalMax;

}

console.log("Resultado funcion sucursalMes ",sucursalDelMes(1, 2019)); // "Centro"

//Parte 3a - imprime un undefined porque no estoy retornando nada. 
function renderPorMes() {
    var mesesNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var mesesLetras = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]


    console.log("Ventas por mes:")
    var hola;

    for (var c = 0; c < mesesNum.length; c++) {
        if (ventasMes(mesesNum[c], 2019) != 0) {
            console.log( "Total de " + mesesLetras[c] + ": " + ventasMes(mesesNum[c], 2019));
        };
    }
    
}

console.log(renderPorMes());

//Parte 3b - imprime un undefined porque no estoy retornando nada. 
function renderPorSucursal(){

   for (var a = 0; a < local.sucursal.length; a++) {
       console.log("Total de " + local.sucursal[a] + ": " + ventasSucursal(local.sucursal[a]))
   }

}

console.log( renderPorSucursal() );

//Parte 3c
function render() {
    console.log("Reporte");
    renderPorMes();
    console.log("Ventas por sucursal: ")
    renderPorSucursal();
    console.log("Producto estrella: " + componenteMasVendido());

    var ventasTotales = [];

    for (var b = 0; b < local.vendedoras.length; b++) {
        var objetoNuevo = {
            nombre: "",
            ventas: 0,
        }

        objetoNuevo.nombre = local.vendedoras[b];
        objetoNuevo.ventas = ventasVendedora(local.vendedoras[b]);

        ventasTotales.push(objetoNuevo)

    }

    var montosTotales = [];

    for (var t = 0; t < local.vendedoras.length; t++) {
        montosTotales.push(ventasVendedora(local.vendedoras[t]));
    }

    var montosTotalesMax = Math.max(...montosTotales);

    for (var s = 0; s < ventasTotales.length; s++) {
        if (ventasTotales[s].ventas === montosTotalesMax) {
            var gracias = "Vendedora que mas ingresos generó: " + ventasTotales[s].nombre;
        }
    }

    return gracias;
}

console.log(render() );


