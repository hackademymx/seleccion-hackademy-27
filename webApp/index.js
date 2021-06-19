const URL = "https://60c00381b8d36700175540ff.mockapi.io/api/v1/pets";
const addPet = document.getElementById("addPet");
const showPets = document.getElementById("showPet");
const submitPet = document.getElementById("submitPet");
const formDiv = document.getElementById("formDiv");
const formData = document.getElementById("formData");
const listDiv = document.getElementById("listDiv");
let state = 0;

showPets.addEventListener("click", (e) => {
  e.preventDefault();
  listDiv.innerHTML = "";
  fetchDataFromApi();
  formDiv.classList.add("hide");
  state = 0;
  listDiv.classList.remove("hide");

});

addPet.addEventListener("click", (e) => {
  e.preventDefault();
  if (state === 0) {
    formDiv.classList.remove("hide");
    listDiv.classList.add("hide");
    listDiv.innerHTML = "";
    state = 1;
  } else if (state === 1) {
    formDiv.classList.add("hide");
    listDiv.classList.remove("hide");
    state = 0;
  }
});

const fetchDataFromApi = async () => {
  await fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (const pet of data) {
        card(pet);
      }
    });
};

submitPet.addEventListener("click", (e) => {
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
  }).then((response) => {
    console.log(response.status);
    if (response.status === 201) {
      formData.reset();
      formDiv.classList.add("hide");
      state = 0;
    }
  });
};

const card = async ({ id, petRace, petName, petAge, petPhoto }) => {
  const cardDiv = await document.createElement("div");
  cardDiv.id = id;
  cardDiv.classList.add("cardColor");
  const content = `<p> Pet Name: ${petName}</p> 
                   <p>Pet Age: ${petAge}</p>
                   <p>Pet Race: ${petRace}</p>
                   <img src="${petPhoto}" alt="${petName}" width="200" heigh="200" > `;
  listDiv.appendChild(cardDiv);
  const newDiv = await document.getElementById(id);
  newDiv.innerHTML = newDiv.innerHTML + content;
};
