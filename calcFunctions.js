let age = document.getElementById('age');
let height = document.getElementById('height');
let weight = document.getElementById('weight');
let female = document.getElementById('f');
let male = document.getElementById('m');

document.getElementById('submit').addEventListener('click', validadeForm);

function validadeForm() {
  if (
    age.value == '' ||
    height.value == '' ||
    weight.value == '' ||
    (male.checked == false && female.checked == false)
  ) {
    alert('Todos os campos são requeridos!');
    document
      .getElementById('submit')
      .removeEventListener('click', calculateIMC);
  } else {
    calculateIMC();
  }
}

function calculateIMC() {
  const arrayPerson = [age.value, height.value, weight.value];
  if (male.checked) {
    arrayPerson.push('male');
  } else if (female.checked) {
    arrayPerson.push('female');
  }

  const imc =
    Number(arrayPerson[2]) /
    (((Number(arrayPerson[1]) / 100) * Number(arrayPerson[1])) / 100);

  let result = '';
  if (imc < 18.5) {
    result = 'Magreza';
  } else if (18.5 <= imc && imc <= 24.9) {
    result = 'Normal';
  } else if (24.9 <= imc && imc <= 30) {
    result = 'Sobrepeso';
  } else if (imc > 30) {
    result = 'Obesidade';
  }

  const h1 = document.createElement('h1');
  const h2 = document.createElement('h2');

  const t = document.createTextNode(result);
  const b = document.createTextNode('IMC: ');
  const r = document.createTextNode(parseFloat(imc).toFixed(2) + ' kg/m²');

  h1.appendChild(t);
  h2.appendChild(b);
  h2.appendChild(r);

  document.body.appendChild(h1);
  document.body.appendChild(h2);

  document.getElementById('submit').removeEventListener('click', calculateIMC);
  document.getElementById('submit').removeEventListener('click', validadeForm);
}

document.getElementById('submit').addEventListener('click', calculateIMC);
