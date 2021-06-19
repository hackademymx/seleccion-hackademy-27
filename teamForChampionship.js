const team = [
  "PSG",
  "Chicago Bulls",
  "Tomateros",
  "Isotopos",
  "Rangers",
  "Isotopos",
];
const championship = ["3", "5", "6", "4", "2", "9"];
const teams = [];
for (let i = 0; i < team.length; i++) {
  teams.push({ team: team[i], championship: championship[i] });
}

teams.sort((a,b) => (a.championship > b.championship) ? -1 : 1)

console.log(teams)