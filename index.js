import FetchWrapper from "./fetch-wrapper.js";
import {capitalize, calculateCalories} from "./helpers.js";
import snackbar from "./snackbar.js";



const API = new FetchWrapper(
  "https://firestore.googleapis.com/v1/projects/jsdemo-3f387/databases/(default)/documents/HEO"
);

const list = document.querySelector("#food-list");
const form = document.querySelector("#create-form");
const name = document.querySelector("#create-name");
const carbs = document.querySelector("#create-carbs");
const protein = document.querySelector("#create-protein");
const fat = document.querySelector("#create-fat");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  API.post("/", {
    fields: {
      name: { stringValue: name.value },
      carbs: { integerValue: carbs.value },
      protein: { integerValue: protein.value },
      fat: { integerValue: fat.value },
    },
  }).then((data) => {
    console.log(data);

    if (data.error) {
        // there was an error
        return "Some data is missing";
    }
  })

    list.insertAdjacentHTML(
        "beforeend",
        `<li class="card">
          <div>
            <h3 class="name">${capitalize(name.value)}</h3>
            <div class="calories">${calculateCalories(carbs.value, protein.value, fat.value)} calories</div>
            <ul class="macros">
              <li class="carbs"><div>Carbs</div><div class="value">${carbs.value}g</div></li>
              <li class="protein"><div>Protein</div><div class="value">${protein.value}g</div></li>
              <li class="fat"><div>Fat</div><div class="value">${fat.value}g</div></li>
            </ul>
          </div>
        </li>`
    );

    name.value = "";
    carbs.value = "";
    protein.value = "";
    fat.value = "";
  });
export default class Todos {
    // Do NOT modify the constructor
    constructor() {
        // we don't capture any parameters here
        // we're defining an array of todos with two example todos
        this.todos = [{
            title: "Learn JavaScript",
            category: "work"
        }, {
            title: "Meditate",
            category: "personal"
        }];
    }

    // TODO: define remaining instance methods
    getAll() {
        return this.todos;
    }
    getCount() {
        return this.todos.length;
    }
    add(title, category) {
           return this.todos.push({title, category});

    }

}
