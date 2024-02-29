# Aplicacion usando fakestoreApi y rutas

La aplicación consiste en una tienda, la cual consume la api de [FakeStoreApi](fakestoreapi.com), muestra los elementos de forma responsiva y crea rutas para cada categoría de elementos para realizar un filtrado.

## Componentes:

La aplicación consta de tres componentes que conforman la vista principal de la pagina, el main page donde se reunen todos los elementos, un componente header que contiene un toolbar y dentro un matSelect para hacer el filtrado, y un item-container donde se crean matCards para mostrar los principales elementos.

## Servicios e interfaces:

La aplicación consume dos servicios y una interfaz; los dos servicios son las dos llamadas a la api para obtener en una el total de los productos y en la otra las categorías de los dichos productos. La interfaz se encarga de tipar los datos que recibo de las llamadas.


