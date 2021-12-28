// DOM Object
const searchBtn = document.getElementById("search-btn");
const addCard = document.getElementById("add-card");

// Event Listeners
searchBtn.addEventListener("click", searchRecipe);


// Functions
function searchRecipe() {
    const ingredient = document.getElementById("search-input").value;
    const urlAPI = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=5&tags=under_30_minutes&q=${ingredient}`;
    fetch(urlAPI, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tasty.p.rapidapi.com",
		"x-rapidapi-key": "825c9f96b8msh874cc6097740e61p1f3245jsn1839d6dd79d2"
	}
    })
    .then(response => response.json())
    .then (data => {
        console.log(data.results);
        let html = "";
        data.results.forEach(recipe => {
            console.log(recipe);
            html += `
                <div class="recipe-card col-4">
                    <img class = "recipe-img" src="${recipe.thumbnail_url}" alt="recipe-img">
                    <h3> ${recipe.name} </h3>
                    <p> ${recipe.yields} </p>
                </div>
            `;

        })
        addCard.innerHTML = html;
        
    })
    .catch(err => {
        console.error(err);
    });
}
