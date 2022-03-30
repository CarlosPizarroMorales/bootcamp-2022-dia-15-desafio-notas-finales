## Cómo calculé los indices de la tabla.

Considerando que los elementos td de la tabla están dispuestos en el código html de manera ordenada, un selector de tipo `querySelectorAll('td')` nos permite iterar sobre el mismo para llenar la tabla.
Para obtener los indíces de cada elemento, considerando que el arreglo de `ramos` tiene un primer elemento en cada subíndice que no corresponde a una nota sino a el nombre del ramo, se han calculado relativos usando divisiones enteras y módulos de la siguiente manera: 

### Elemento base:
* indice del selector,  i = 0-11
* cantidad de elementos por fila: 4

|td|1|2|3|4|5|6|7|8|9|10|11|12|
|---|---|----|----|----|----|----|----|----|----|----|----|----|
|i |0|1|2|3|4|5|6|7|8|9|10|11|
|i % 4|0|1|2|3|0|1|2|3|0|1|2|3|
|Math.trunc(i/4)|0|0|0|0|1|1|1|1|2|2|2|2|
|(i + 1) % 4|1|2|3|0|1|2|3|0|1|2|3|0|  

### Procedimiento:
Con las series anteriores, basta apuntar el arreglo `ramos` con los índice y subíndice según se necesite:

1. Cuando no estamos en la  la 4° columna -donde deben calcularse los promedios-, basta con apuntar a: 
2. `ramos[Math.trunc(i / 4)][(i % 4) + 1]`  
3. La serie anterior funciona perfecto excepto para cuando el subíndice suma 4. Ese subíndice no existe en el arreglo. Además el momento de ese valor es el que corresponde al cálculo del promedio de las 3 notas anteriores. Eso se resuelve con la siguiente expresión: 
4. `if ((i + 1) % 4) === 0` esta expresión que corresponde a la última columna de la tabla, evaluará si estamos en la posición donde debemos calcular un promedio y luego simplemente se calcula sacando los 3 índices anteriores, por ejemplo: 
5. `ramos[Math.trunc(i/4)][(i % 4) - 2]` como este cálculo se realizará solo en los índices 3, 7 y 11 restar 2, 1 o 0 permitirá encontrar los 3 valores anteriores para dividir por 3. 
6. Por legibilidad del código o si la tabla fuera muy grande, se pueden asignar a variables cortas los cálculos para cada elemento que apunta los índices pero como este es un ejercicio rápido preferí usar la potencia del editor en vez de agregar líneas innecesarias al código. Esta documentación servirá para evitar que _"solo Dios entienda en 6 meses"_ lo que quise hacer.
7. Veo que calcular índices y subíndices de esta manera es práctico para trabajar sobre matrices. 

