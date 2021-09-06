var b = document.getElementById("extraer");
var resultado = document.getElementById("resultado");
b.addEventListener("click", entregarDinero);

contar();

function entregarDinero()
{
 var t  = document.getElementById("dinero");
 dinero = parseInt(t.value);
 for(var b of caja)
 {
   var div = Math.floor(dinero/b.valor);
   if(dinero > 0)
   {
     papeles = b.cantidad;
     if(div > b.cantidad)
     {
       papeles = b.cantidad;
       console.log(papeles);
     }
     else
     {
       papeles = div;
       console.log(papeles);
     }
    }
    else
    {
      break;
    }
   entregado.push(new Billetes(b.valor, papeles));
   dinero -= (b.valor * papeles);
   b.cantidad -= papeles;
 }
 if(dinero > 0)
 {
   resultado.innerHTML = "No puedo entregar esa cantidad";
 }
 else
 {
   clear();
   for(var e of entregado)
  {
    if(e.cantidad > 0)
    {
      resultado.innerHTML += "<img src=" + e.imagen.src + " />";
      e.mostrar();
     //resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
    }
  }
  contar();
 }
}


function contar()
{
	total = 0
	for (var tot of caja)
	{
		total = total + tot.valor * tot.cantidad;
	}
	console.log(total);
}


function clear()
    {
        document.getElementById("resultado").innerHTML = '';
    }
