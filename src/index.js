function showAnswer(response) {
  console.log(response);
}

let apiKey = "24b9b3ae0f6ea728ao45f6et261b0962";
let context = "be polite and and provide a very short answer";
let prompt = "When was the first AI created?";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=Q${apiKey}`;

axios.get(apiUrl).then(showAnswer);

let buttonElement = document.querySelector("#special-button");
console.log(buttonElement);
