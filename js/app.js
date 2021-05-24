const form = document.querySelector(".form-number"),
  input = document.querySelector(".form-number input"),
  start = document.querySelector(".btn-start"),
  error = document.querySelector(".invalid-feedback");

const stop = document.querySelector(".stop-game"),
  success = document.querySelector(".card-success"),
  loose = document.querySelector(".card-loose"),
  secret = document.querySelector(".secret-number"),
  gain = document.querySelector(".gain"),
  quit_loose = document.querySelector(".card-loose .btn-quit"),
  replay_loose = document.querySelector(".card-loose .btn-replay"),
  replay_success = document.querySelector(".card-success .btn-replay"),
  quit_success = document.querySelector(".card-success .btn-quit");

//Compteur
let begin = false;
let compteur = 0;
let montant = 4000;
let stopCompteur = false;

//Number to guess
const reference =
  "9" + Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);

//Load all events
loadEvents();

function loadEvents() {
  form.addEventListener("submit", addNumber);
  start.addEventListener("click", startGame);
  replay_success.addEventListener("click", refresh);
  replay_loose.addEventListener("click", refresh);
  quit_loose.addEventListener("click", refresh);
  quit_success.addEventListener("click", refresh);
}

function refresh(e) {
  e.preventDefault();
  window.location.reload();
}

function startGame(event) {
  begin = true;
  input.removeAttribute("disabled");
  const montantToShow = document.querySelector(".montant");
  const timerMontant = setInterval(function () {
    montantToShow.innerText = montant;

    montant = montant - 50;

    if (montant == 0) {
      setTimeout(function () {
        clearInterval(timerMontant);
        showResult(false);
      }, 1000);
    }
    if (stopCompteur) {
      clearInterval(timerMontant);
    }
  }, 1000);
}

function showMontant(num) {
  document.querySelector(".montant").textContent = num;
  gain.textContent = num + " DT";
  stopCompteur = true;
}

function addNumber(e) {
  e.preventDefault();

  if (compteur < 7 && begin) {
    // Hide error message
    error.style.display = "none";

    // check if number is valid
    if (!checkValidity(input.value)) {
      document.querySelector(".invalid-feedback").style.display = "block";
      return;
    } else {
      document.querySelector(".invalid-feedback").style.display = "none";
    }

    // Compare the number provide by the end user
    // with the random number
    const tel = checkNumber(input.value);

    updateDom(tel);

    input.value = "";

    const occurence = tel.map(function (item) {
      return item.class;
    });

    // If we found all the number then we alert
    if (checkOccurence("blue", occurence) == occurence.length) {
      showMontant(montant);
      showResult();
    }
  } else {
    const tel = checkNumber(input.value);

    updateDom(tel);
    showResult(false);
    stopCompteur = true;
  }
}

// This function update the DOM
function updateDom(tel) {
  const tr = document.getElementById(`${compteur}`);
  let td = "";
  tel.forEach(function (item, index, array) {
    tr.innerHTML = "";

    td += ` 
			<td>
				<div class="circle ${item.class}">${item.num}</div>
			</td>
		`;
  });
  td += `
		<td>
			<div class="circle">TT</div>
		</td> 
	`;
  tr.innerHTML = td;
  compteur++;
}

function checkValidity(num) {
  const regex = /^9(\d){6}$/gm;
  return num.match(regex);
}

// This function compare the number with the guess number
function checkNumber(number) {
  const num = number.toString().split("");

  const referenceNum = reference.toString().split("");

  let numberArray = [{ num: "9", class: "blue" }];

  for (var i = 1; i < num.length; i++) {
    let obj = {
      num: "",
      class: "",
    };
    // If a number is more than one time on phone number

    if (checkOccurence(num[i], referenceNum) > 1) {
      if (referenceNum.indexOf(num[i], i) == i) {
        obj.num = num[i];
        obj.class = "blue";
      } else {
        obj.num = num[i];
        obj.class = "yellow";
      }
    } else {
      if (referenceNum.indexOf(num[i]) == i) {
        obj.num = num[i];
        obj.class = "blue";
      } else if (referenceNum.indexOf(num[i]) != -1) {
        obj.num = num[i];
        obj.class = "yellow";
      } else {
        obj.num = num[i];
        obj.class = "grey";
      }
    }

    numberArray.push(obj);
  }

  return numberArray;
}

// This function help us to check an occurence of a string
function checkOccurence(char, array) {
  let occurence = 0;

  array.forEach(function (item, index) {
    if (char === item) {
      occurence++;
    }
  });

  return occurence;
}

function showResult(bool = true) {
  stop.classList.remove("hidden");
  if (bool) {
    success.classList.add("card-show");
  } else {
    loose.classList.add("card-show");
    secret.textContent = reference;
  }
}
