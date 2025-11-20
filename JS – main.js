// Salvare progres exerciții
function saveProgress(exercitiu, scor) {
  let progres = JSON.parse(localStorage.getItem("progres")) || {};
  progres[exercitiu] = scor;
  localStorage.setItem("progres", JSON.stringify(progres));
}

// Obține top utilizatori (simplificat)
function getTopUsers() {
  let progres = JSON.parse(localStorage.getItem("progres")) || {};
  console.log(progres);
}

// Exemplu de testare
saveProgress("ex1", 10);
getTopUsers();
