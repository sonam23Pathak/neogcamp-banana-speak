const btnTranslate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#txt-input");
const output = document.querySelector("#output");

const serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {

     return serverURL + "?" + "text=" + text

}

function clickHandler() {

     var inputText = txtInput.value;

     fetch(getTranslationURL(inputText))
          .then(response => response.json())
          .then(json => {

               var translatedText = json.contents.translated;
               output.innerText = translatedText;
               console.log(json.contents.translated)
          })

};

btnTranslate.addEventListener("click", clickHandler)