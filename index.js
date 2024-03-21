let myModel = null;
let inputElement = document.getElementById("text");
const button = document.getElementById("send");
let results = document.getElementById("results");

button.addEventListener("click", () => {
  // The minimum prediction confidence.
  let inputValue = inputElement.value;

  myModel.classify(inputValue).then((predictions) => {
    results.innerHTML = "";
    console.log(predictions);
    for (let prediction of predictions) {
      results.innerHTML += `<p>${prediction.label}: ${prediction.results[0].match}</p>`;
    }
  });
});

toxicity.load(0.6).then((theLoadedModel) => {
  myModel = theLoadedModel;
  console.log("model is loaded");
});
