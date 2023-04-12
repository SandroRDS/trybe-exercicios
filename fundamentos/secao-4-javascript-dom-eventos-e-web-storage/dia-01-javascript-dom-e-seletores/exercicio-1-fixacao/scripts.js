const header = document.querySelector('#header-container');
const divEmTasks = document.querySelector('.emergency-tasks');
const emTasksTitles = document.querySelectorAll(".emergency-tasks h3")
const divNoEmTasks = document.querySelector('.no-emergency-tasks');
const noEmTasksTitle = document.querySelectorAll('.no-emergency-tasks h3');
const rodape = document.querySelector("#footer-container");

header.style.backgroundColor = 'green';
divEmTasks.style.backgroundColor = 'salmon';
emTasksTitles.forEach(titulo => titulo.style.backgroundColor = 'purple');
divNoEmTasks.style.backgroundColor = 'yellow';
noEmTasksTitle.forEach(titulo => titulo.style.backgroundColor = 'black');
rodape.style.backgroundColor = 'darkgreen';