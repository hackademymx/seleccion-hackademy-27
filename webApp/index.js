const URL = "https://60c00381b8d36700175540ff.mockapi.io/api/v1/pets";
const addPet = document.getElementById("addPet");
const showPet = document.getElementById("showPet");
const submitPet = document.getElementById("submitPet");
const form = document.getElementById("formTest");

const fetchDataFromApi = async () => {
  await fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("displayDiv").appendChild(data);
    });
};

document.getElementById("submitPet").addEventListener("click", (e) => {
  e.preventDefault();
  postData();
});


const postData = async () => {
  const petName = document.getElementById("petName").value;
  const petAge = document.getElementById("petAge").value;
  const petPhoto = document.getElementById("petPhoto").value;
  const petRace = document.getElementById("petRace").value;

  const data = {
    petRace,
    petName,
    petAge,
    petPhoto,
  };

  fetch(URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => console.log(response));
};
