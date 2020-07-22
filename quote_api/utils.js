const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}

const createElement = (queryArguments) => {
  if (queryArguments.hasOwnProperty('quote') &&
      queryArguments.hasOwnProperty('person')) {
        console.log(queryArguments.quote, queryArguments.person);
        return {
          quote: {
            'quote': queryArguments.quote,
            'person': queryArguments.person
            }
        };
      } else {
        return false;
      }

}

module.exports = {
  getRandomElement: getRandomElement,
  createElement: createElement
};
