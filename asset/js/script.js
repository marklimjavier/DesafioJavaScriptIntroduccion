let PrecioInicial = 240000
let BotonMas = document.querySelector ("#BotonMas")
let BotonMenos = document.querySelector ("#BotonMenos")
let Total = document.querySelector ("#Total")
let Cantidad = document.querySelector ("#Cantidad")

BotonMenos.onclick = function()
{
Cantidad.innerHTML --
Total.innerHTML = (Cantidad.innerHTML * PrecioInicial).toLocaleString ("es-CL")
}

BotonMas.onclick = function()
{
Cantidad.innerHTML ++
Total.innerHTML =(Cantidad.innerHTML * PrecioInicial).toLocaleString ("es-CL")
}