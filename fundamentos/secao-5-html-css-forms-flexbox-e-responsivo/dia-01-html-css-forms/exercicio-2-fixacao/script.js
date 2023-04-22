// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

const previnirComportamentoPadrao = (evento) => evento.preventDefault(); 
HREF_LINK.addEventListener('click', previnirComportamentoPadrao);
INPUT_CHECKBOX.addEventListener('click', previnirComportamentoPadrao);
INPUT_TEXT.addEventListener('keypress', (evento) => {
  previnirComportamentoPadrao(evento);
  if(evento.key === 'a') {
    evento.target.value += 'a';
  }
});