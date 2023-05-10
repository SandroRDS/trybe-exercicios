const data = require('./data');

const expectedResult = 'Stephen King';
const authorBornIn1947 = () => {
  const dateBorn = 1947;
  const { author } = data.find(({ author }) => author.birthYear === dateBorn);
  return author.name;
}
console.log(authorBornIn1947());