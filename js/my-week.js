document.addEventListener('DOMContentLoaded', () => {
    const availableRecipesList = document.getElementById('available-recipes');
    const recipeSlots = document.querySelectorAll('.recipe-slot');

    // Populate the list of available recipes
    recipes.forEach(recipe => {
        const li = document.createElement('li');
        li.textContent = recipe.title;
        li.setAttribute('draggable', true);
        li.dataset.recipeId = recipe.id;
        availableRecipesList.appendChild(li);

        li.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', recipe.id);
        });
    });

    recipeSlots.forEach(slot => {
        slot.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        slot.addEventListener('drop', (e) => {
            e.preventDefault();
            const recipeId = e.dataTransfer.getData('text/plain');
            const recipe = recipes.find(r => r.id == recipeId);
            if (recipe) {
                const recipeElement = document.createElement('div');
                recipeElement.textContent = recipe.title;
                slot.appendChild(recipeElement);
            }
        });
    });
});
