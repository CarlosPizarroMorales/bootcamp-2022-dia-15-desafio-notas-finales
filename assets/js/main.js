const parciales = 3;
const perfil = ['Desarrollo web'];
const data = [['HTML'], ['CSS'], ['Javascript']];
perfil.push(prompt('Ingrese el nombre del alumno:'));

for (let i = 0; i < (parciales * data.length); i++) {
    let parcial = prompt(`Ingrese la nota ${(i % parciales) + 1} del ramo ${data[Math.trunc(i / parciales)][0]}.`, 1);
    data[Math.trunc(i / 3)].push(Number(parcial));
}

document.querySelectorAll('p').forEach((e, i) => e.innerText += perfil[i]);

const tabla = document.querySelectorAll('td');
for (let i = 0; i < parciales; i++) {
    data[i].push((data[i][1] + data[i][2] + data[i][3]) / parciales);
    tabla[(i * 4)].innerText = data[i][1];
    tabla[(i * 4) + 1].innerText = data[i][2];
    tabla[(i * 4) + 2].innerText = data[i][3];
    tabla[(i * 4) + 3].innerText = data[i][4].toFixed(2);
}


// COMO HACER UNA SERIE SIMPLE QUE OBTENGA EL VALOR 1,2,3,4 ITERATIVAMENTE???
// for (let i = 0; i < 12; i++) {
//     document.querySelectorAll('td')[i].innerText = data[i % 4][Math.trunc()]
// }



