const btnTranslate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#txt-input");
const output = document.querySelector("#output");

const serverURL = "https://api.funtranslations.com/translate/minion.json" + "?text=Hello sonam";

function clickHandler() {

     output.innerText = "hiiii"


     fetch(serverURL)
          .then(response => response.json())
          .then(data => output.innerText = data.contents.translated)
}

btnTranslate.addEventListener("click", clickHandler);