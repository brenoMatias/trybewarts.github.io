const buttonlogin = document.getElementById('btnform');
const confirmacao = document.getElementById('agreement');
const submit = document.getElementById('submit-btn');
submit.disabled = true;

// https://www.w3schools.com/
// tags/att_input_disabled.asp

buttonlogin.addEventListener('click', () => {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;
  if (login === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

function SubmitF() {
  if (confirmacao.checked !== true) {
    submit.disabled = true;
  } else {
    submit.disabled = false;
  }
}

confirmacao.addEventListener('click', SubmitF);
// https://www.codexworld.com/live-character-counter-javascript/

function countChars(obj) {
  const maxLength = 500;
  const strLength = obj.value.length;
  const charRemain = (maxLength - strLength);

  if (charRemain < 0) {
    document.getElementById('counter').innerHTML = `<span style="color: red;"> 
    Você execedeu o limite de ${maxLength} characters</span>`;
  } else {
    document.getElementById('counter').innerHTML = `${charRemain} characters restantes`;
  }
}

if (countChars > 500) {
  alert('error');
}

function addFullName() {
  const name = document.querySelector('#input-name');
  const lastname = document.querySelector('#input-lastname');
  const fullName = document.querySelector('#addName');
  fullName.innerHTML = `${fullName.innerHTML} ${name.value} ${lastname.value}`;
}

function emailAdd() {
  const email = document.querySelector('#input-email');
  const emailSelect = document.querySelector('#addEmail');
  emailSelect.innerHTML = `${emailSelect.innerHTML} ${email.value}`;
}

function houseAdd() {
  const house = document.querySelector('#house');
  const houseSelect = document.querySelector('#addHouse');
  houseSelect.innerHTML = `${houseSelect.innerHTML} ${house.value}`;
}

function familyAdd() {
  const family = document.getElementsByName('family');
  const familySelect = document.querySelector('#addFamily');
  for (let index = 0; index < family.length; index += 1) { // precisa do loop porque são tres opçoes de escolha
    if (family[index].checked === true) { // o loop passa pela extensão das opções
      familySelect.innerHTML = `${familySelect.innerHTML} ${family[index].value}`;
    }
  }
}

function subjectsAdd() {
  const subjects = document.getElementsByName('materia'); // cria array com os valores das matérias
  const subjectsSelect = document.querySelector('#addClass');
  const subjectsChecked = [];
  for (let index = 0; index < subjects.length; index += 1) { // mesma loop na array das matérias
    if (subjects[index].checked === true) {
      subjectsChecked.push(subjects[index].value); // se estar checado adiciona na matriz de materias
    }
  }
  subjectsSelect.innerHTML = `${subjectsSelect.innerHTML} ${subjectsChecked.join(', ')}`;
}

function rateAdd() {
  const rate = document.getElementsByName('rate'); // mesma ideia das materias e do family
  const rateSelect = document.querySelector('#addRate');
  for (let index = 0; index < rate.length; index += 1) {
    if (rate[index].checked === true) {
      rateSelect.innerHTML = `${rateSelect.innerHTML} ${rate[index].value}`;
    }
  }
}

function obsAdd() {
  const obs = document.querySelector('#textarea');
  const obsSelect = document.querySelector('#addObs');
  obsSelect.innerHTML = `${obsSelect.innerHTML} ${obs.value}`;
}

function registerInfos(event) {
  addFullName();
  emailAdd();
  houseAdd();
  subjectsAdd();
  familyAdd();
  rateAdd();
  obsAdd();
  event.preventDefault();
}

submit.addEventListener('click', registerInfos);