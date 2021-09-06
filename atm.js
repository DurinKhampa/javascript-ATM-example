var imagenes = [];
imagenes[100] = "usd100.png";
imagenes[50] = "usd50.png";
imagenes[20] = "usd20.png";
imagenes[10] = "usd10.png";

var caja = [];
caja.push(new Billetes(100, 5));
caja.push(new Billetes(50, 5));
caja.push(new Billetes(20, 5));
caja.push(new Billetes(10, 5));

var dinero;
var entregado = [];
var restante = [];
var papeles = 0;
