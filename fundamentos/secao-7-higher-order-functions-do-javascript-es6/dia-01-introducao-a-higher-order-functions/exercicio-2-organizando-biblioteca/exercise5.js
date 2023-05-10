const data = require('./data');

const expectedResult = true;

const someBookWasReleaseOnThe80s = () => data.some(({ releaseYear }) => {
  return releaseYear >= 1980 && releaseYear < 1990;
});

console.log(someBookWasReleaseOnThe80s());