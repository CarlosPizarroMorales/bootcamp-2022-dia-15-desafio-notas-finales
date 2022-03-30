const parciales = 3;
const perfil = ['Desarrollo web'];
const data = [['HTML'], ['CSS'], ['Javascript']];
perfil.push(prompt('Ingrese el nombre del alumno:'));

// ciclo que solicita las notas parciales de cada ramo.
// Se utilizan los datos del arreglo data y la posición del 
// índice del loop para pushear las notas. 
for (let i = 0; i < (parciales * data.length); i++) {
  let parcial = prompt(`Ingrese la nota ${(i % parciales) + 1} del ramo ${data[Math.trunc(i / parciales)][0]}.`, 1);
  data[Math.trunc(i / 3)].push(Number(parcial));
}

// Llena elementos HTML de parrafo con datos del alumno/carrera
document.querySelectorAll('p').forEach((e, i) => e.innerText += (perfil[i] + '\t'));

// Calcula promedios sin almacenarlos y llena tabla
const tabla = document.querySelectorAll('td');
for (let i = 0; i < parciales; i++) {
  data[i].push((data[i][1] + data[i][2] + data[i][3]) / parciales);
  tabla[(i * 4)].innerText = data[i][1];
  tabla[(i * 4) + 1].innerText = data[i][2];
  tabla[(i * 4) + 2].innerText = data[i][3];
  tabla[(i * 4) + 3].innerText = data[i][4].toFixed(1);
}