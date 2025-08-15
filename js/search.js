document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const initialQuery = urlParams.get('query') || '';

    const searchInput = document.getElementById('search-input');
    const searchQuerySpan = document.getElementById('search-query');
    const resultsList = document.getElementById('results-list');

    // Set initial value from URL and perform initial search
    searchInput.value = initialQuery;
    performSearch(initialQuery);

    let debounceTimer;
    // Add event listener for dynamic search
    searchInput.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            performSearch(searchInput.value);
        }, 300);
    });


    function performSearch(query) {
        // Update URL
        const url = new URL(window.location);
        url.searchParams.set('query', query);
        window.history.pushState({}, '', url);

        searchQuerySpan.textContent = query;
        const lowerCaseQuery = query.toLowerCase().trim();
        const searchTerms = lowerCaseQuery.split(' ').filter(term => term.length > 0);

        if (searchTerms.length === 0) {
            resultsList.innerHTML = '<li>Start typing to see recipe results.</li>';
            return;
        }

        const foundRecipes = recipes.filter(recipe => {
            const searchableText = [
                recipe.title.toLowerCase(),
                ...recipe.tags.map(t => t.toLowerCase()),
                ...recipe.ingredients.map(i => i.name.toLowerCase())
            ].join(' ');

            return searchTerms.every(term => searchableText.includes(term));
        });

        displayResults(foundRecipes);
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
