const dataJSON = require("./data.json");
const deathYear = [];
const birthYear = [];
let maxPeopleAlive = 1;
let peopleAlive = 1;
let currentYear = 0;
let i = 0;
let j = 0;


const jsonParser = () => {
  dataJSON.data.forEach((element) => {
    birthYear.push(element.birthYear);
    deathYear.push(element.deathYear);
  });
};
jsonParser();


while (i < dataJSON.data.length && j < dataJSON.data.length) {
  if (birthYear[i] <= deathYear[i]) {
    peopleAlive += 1;
    if (peopleAlive > maxPeopleAlive) {
      maxPeopleAlive = peopleAlive;
      currentYear = birthYear[i];
    }
    i++;
  } else {
    peopleAlive -= 1;
    j++;
  }
}
console.log(maxPeopleAlive, currentYear);

