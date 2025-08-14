document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    const searchQuerySpan = document.getElementById('search-query');
    const resultsList = document.getElementById('results-list');

    if (query) {
        searchQuerySpan.textContent = query;
        const lowerCaseQuery = query.toLowerCase();

        const foundRecipes = recipes.filter(recipe => {
            // Check title
            if (recipe.title.toLowerCase().includes(lowerCaseQuery)) {
                return true;
            }
            // Check tags
            if (recipe.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))) {
                return true;
            }
            // Check ingredients
            if (recipe.ingredients.some(ing => ing.name.toLowerCase().includes(lowerCaseQuery))) {
                return true;
            }
            return false;
        });

        displayResults(foundRecipes);

    } else {
        searchQuerySpan.textContent = '...nothing';
        resultsList.innerHTML = '<li>Please enter a search term on the home page.</li>';
    }

    function displayResults(recipesToDisplay) {
        resultsList.innerHTML = '';

        if (recipesToDisplay.length === 0) {
            resultsList.innerHTML = '<li>No recipes found matching your search.</li>';
            return;
        }

        recipesToDisplay.forEach(recipe => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `recipes/template.html?id=${recipe.id}`;
            a.textContent = recipe.title;
            li.appendChild(a);
            resultsList.appendChild(li);
        });
    }
});
