// h1 { color: red }
// .parrafito { ... }
// #pid { ... }

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('pid');


//console.log(input.value);

console.log({
  h1,
  p,
  parrafito,
  pid,
  //input,
});

h1.innerHTML = 'Alo! <br> Waos'
//h1.innerText = 'Alo! <br> Waos' permite interpretar solo texto y no funciones de HTML como la etiqueta "<br>
//alert(h1.getAttribute('pantalla'))
p.setAttribute('id', 'rojo') //selecciona el primer atributo selecionado y cambia (o agrega) la clase o id o lo que sea

h1.classList.add('rojo');
h1.classList.remove('verder'); 
//no veo necesidad de comentar pero acá estoy comentando

//input.value = '456'
console.log(); //segundo 'log'
const img = document.createElement('img');
img.setAttribute('src', 'https://m6.hentaiera.com/022/ev12mtp9z8/8t.jpg')

pid.append(img)

//escuchando eventos

const input1 = document.querySelector('#inputId');
const input2 = document.querySelector('#inputId2');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');
const button = document.createElement('button');

btn.addEventListener("click", calcU);

function calcU(){
    const suma = Number(input1.value) + Number(input2.value);
    pResult.innerHTML = "Resultado: " + suma + "<br>";
    img.setAttribute('src', 'https://m6.hentaiera.com/022/ev12mtp9z8/9t.jpg')
    button.setAttribute('type', 'submit')
    button.innerHTML = "reborn"
pResult.append(button)
};
function calcU2(){
    const suma = Number(input1.value) - Number(input2.value);
    pResult.innerHTML = "Resultado: " + suma + "<br>";
    img.setAttribute('src', 'https://m6.hentaiera.com/022/ev12mtp9z8/9t.jpg')
    button.setAttribute('type', 'submit')
    button.innerHTML = "reborn"
pResult.append(button)
};
function calcU3(){
    const suma = Number(input1.value) * Number(input2.value);
    pResult.innerHTML = "Resultado: " + suma + "<br>";
    img.setAttribute('src', 'https://m6.hentaiera.com/022/ev12mtp9z8/9t.jpg')
    button.setAttribute('type', 'submit')
    button.innerHTML = "reborn"
pResult.append(button)
};
function calcU4(){
    const suma = Number(input1.value) / Number(input2.value);
    pResult.innerHTML = "Resultado: " + suma + "<br>";
    img.setAttribute('src', 'https://m6.hentaiera.com/022/ev12mtp9z8/9t.jpg')
    button.setAttribute('type', 'submit')
    button.innerHTML = "reborn"
pResult.append(button)
};


