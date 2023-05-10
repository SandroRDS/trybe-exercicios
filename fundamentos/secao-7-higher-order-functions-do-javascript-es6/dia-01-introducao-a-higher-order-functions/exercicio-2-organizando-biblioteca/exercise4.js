const data = require('./data');

const expectedResult = false;

const everyoneWasBornOnSecXX = () => data.every(({ author }) => author.birthYear >= 1901);
console.log(everyoneWasBornOnSecXX());