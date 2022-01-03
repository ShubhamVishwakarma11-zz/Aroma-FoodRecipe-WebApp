// DOM Object
const searchBtn = document.getElementById("search-btn");
const addCard = document.getElementById("add-card");
const feed = document.getElementById("feed");

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



fetch("https://tasty.p.rapidapi.com/recipes/list?from=0&size=50&tags=under_30_minutes&q=chocolate", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tasty.p.rapidapi.com",
		"x-rapidapi-key": "825c9f96b8msh874cc6097740e61p1f3245jsn1839d6dd79d2"
	}
})
.then(response => response.json())
.then (data => {
    console.log(data.results);
    let html = `
    <div class="row">
    `;
    data.results.forEach(recipe => {
        console.log(recipe);
        html += `
        <div class="col-6">
        <div class="recipe-card">
            <div class="recipe-body">
                <img class = "recipe-img" src="${recipe.thumbnail_url}" alt="recipe-img">
                <div class="recipe-text">
                    <h3 class="recipe-title"> ${recipe.name} </h3>
                    <h5 class ="recipe-subtitle"> ${recipe.yields}</h5>
                    <p class="recipe-description">Egg in a Hole and Egg in a Hole </p>
                </div>
            </div>
        </div>
        </div>
        `;

    })
    html += `
        </div>
    `;

    feed.innerHTML = html;
    
})
.catch(err => {
    console.error(err);
});


            // <div class="recipe-card col-4">
            //     <img class = "recipe-img" src="${recipe.thumbnail_url}" alt="recipe-img">
            //     <h3> ${recipe.name} </h3>
            //     <p> ${recipe.yields} </p>
            // </div>