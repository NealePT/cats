const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (error) functionToRunWhenDone(undefined);
    if (!error) functionToRunWhenDone(data);
  });
};

const printCatBreed = breed => {
  console.log('Return Value: ', breed);
};

module.exports = breedDetailsFromFile;

