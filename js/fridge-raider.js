document.addEventListener('DOMContentLoaded', () => {
    const findButton = document.getElementById('find-recipes-btn');
    const ingredientsInput = document.getElementById('ingredients-input');
    const resultsList = document.getElementById('results-list');

    findButton.addEventListener('click', () => {
        const userInput = ingredientsInput.value.toLowerCase().trim();
        if (!userInput) {
            resultsList.innerHTML = '<li>Please enter some ingredients.</li>';
            return;
        }

        const userIngredients = userInput.split(',').map(item => item.trim());

        const matchedRecipes = [];

        recipes.forEach(recipe => {
            let matchCount = 0;
            const recipeIngredients = recipe.ingredients.map(ing => ing.name.toLowerCase());

            userIngredients.forEach(userIng => {
                // Use .some() to find if any recipe ingredient includes the user's ingredient string
                // This allows for partial matches (e.g., "tomato" matches "cherry tomatoes")
                if (recipeIngredients.some(recipeIng => recipeIng.includes(userIng))) {
                    matchCount++;
                }
            });

            if (matchCount > 0) {
                // We can also calculate a match percentage to better prioritize.
                // For now, we just use the count.
                const matchScore = matchCount;
                matchedRecipes.push({ ...recipe, matchScore });
            }
        });

        // Sort by the match score in descending order
        matchedRecipes.sort((a, b) => b.matchScore - a.matchScore);

        displayResults(matchedRecipes);
    });

    function displayResults(foundRecipes) {
        resultsList.innerHTML = '';

        if (foundRecipes.length === 0) {
            resultsList.innerHTML = '<li>No matching recipes found. Try entering more ingredients.</li>';
            return;
        }

        foundRecipes.forEach(recipe => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `recipes/template.html?id=${recipe.id}`;
            a.textContent = recipe.title;
            li.appendChild(a);

            const scoreSpan = document.createElement('span');
            scoreSpan.textContent = ` (Matches: ${recipe.matchScore})`;
            scoreSpan.style.color = '#a0522d';
            li.appendChild(scoreSpan);

            resultsList.appendChild(li);
        });
    }
});
