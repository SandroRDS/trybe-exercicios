const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele.
// 1.1. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando este for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como é possível fazer isso? Dica: Lembre-se do método `.classList.remove`.
const modificarClase = ({ target }) => {
  const elementPrevSelect = document.querySelector('.tech');
  elementPrevSelect.classList.remove('tech');
  target.classList.add('tech');
};

const itens = document.querySelectorAll('li');
itens.forEach(li => li.addEventListener('click', modificarClase));

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech'.
const modificarTexto = ({ target }) => document.querySelector('.tech').innerText = target.value;
input.addEventListener('input', modificarTexto);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy',
// redirecione para alguma página.
// 4.1. Que tal redirecionar para seu portfólio? Dica: Lembre-se dos métodos `window.location.replace` e `window.open`.
myWebpage.addEventListener('dblclick', () => window.location.replace('https://sandrords.github.io/rds-games/'));

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo.
myWebpage.addEventListener('mouseover', ({ target }) => target.style.color = 'orange');