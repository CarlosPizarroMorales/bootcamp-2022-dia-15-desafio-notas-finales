const parciales = 3;
const perfil = ['Desarrollo web'];
const ramos = [['HTML'], ['CSS'], ['Javascript']];
perfil.push(prompt('Ingrese el nombre del alumno:'));

// Loop que solicita las notas parciales y las pushea a ramos como Number()
for (let i = 0; i < (parciales * ramos.length); i++) {
  let parcial = prompt(`Ingrese la nota ${(i % parciales) + 1} del ramo ${ramos[Math.trunc(i / parciales)][0]}.`, 1);
  ramos[Math.trunc(i / 3)].push(Number(parcial));
}

// Llena elementos HTML de parrafo con datos del alumno/carrera
document.querySelectorAll('h5').forEach((e, i) => e.innerText += (perfil[i]));

// Calcula promedios y llena tabla. Leer assets/README.md para detalles. 
document.querySelectorAll('td').forEach((e, i) => {
  (i + 1) % 4 === 0 
    ? e.innerText = ((ramos[Math.trunc(i/4)][(i % 4) - 2] + ramos[Math.trunc(i/4)][(i % 4) - 1] + ramos[Math.trunc(i/4)][i % 4]) / 3).toFixed(1)
    : e.innerText = ramos[Math.trunc(i / 4)][(i % 4) + 1];
});