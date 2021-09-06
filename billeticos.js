class Billetes
{
  constructor(v, c)
  {
    //this.nombre = n;
    this.imagen = new Image();
    this.valor = v;
    this.cantidad = c;

    this.imagen.src = imagenes[this.valor];
  }
  mostrar()
  {
    //resultado.innerHTML += "<img src=" + this.imagen + "<br />";
    resultado.innerHTML += "<p>";
    resultado.innerHTML += "Te entrego " + this.cantidad + " billetes <br />";
    resultado.innerHTML += "de " + this.valor + " dolares <hr />";
    resultado.innerHTML += "</p>";
  }
}
