const data = require('./data');

const expectedResult = false;

const authorUnique = () => {
  const years = [];

  return data.every(({ author }) => {
    if (!years.includes(author.birthYear)) {
      years.push(author.birthYear);
      return true;
    }
    return false;
  });
}

console.log(authorUnique());