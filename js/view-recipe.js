document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = parseInt(urlParams.get('id'));
    const recipe = recipes.find(r => r.id === recipeId);

    if (recipe) {
        document.title = recipe.title;
        document.querySelector('.recipe-title').textContent = recipe.title;
        document.querySelector('.recipe-subtitle').textContent = recipe.subtitle;

        // Serving slider and timing info
        const servingSlider = document.getElementById('servings');
        const servingCount = document.getElementById('serving-count');
        const displayServings = document.getElementById('display-servings');

        if (recipe.servings) {
            servingSlider.value = recipe.servings;
            servingSlider.max = recipe.servings * 2;
            servingCount.textContent = recipe.servings;
            displayServings.textContent = recipe.servings;
            // This global variable is a bit of a hack, but it's the simplest way to get the base servings to recipe.js
            window.baseServings = recipe.servings;
        } else {
            // Hide slider if servings not specified
            document.querySelector('.serving-slider').style.display = 'none';
        }


        document.getElementById('prep-time').textContent = recipe.prepTime;
        document.getElementById('cook-time').textContent = recipe.cookTime;

        const ingredientsList = document.querySelector('.ingredients-list');
        ingredientsList.innerHTML = '';
        recipe.ingredients.forEach((ingredient, index) => {
            const li = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `ing${index + 1}`;
            const label = document.createElement('label');
            label.htmlFor = `ing${index + 1}`;
            let amountHtml = '';
            if (ingredient.amount) {
                const unitAttr = ingredient.unit ? `data-unit="${ingredient.unit}"` : '';
                amountHtml = `<span class="ingredient-amount" data-base="${ingredient.amount}" ${unitAttr}>${ingredient.amount}${ingredient.unit || ''}</span> `;
            }
            label.innerHTML = `${amountHtml}${ingredient.name}`;
            li.appendChild(checkbox);
            li.appendChild(label);
            ingredientsList.appendChild(li);
        });

        const instructionsList = document.querySelector('.instructions-list');
        instructionsList.innerHTML = '';
        recipe.instructions.forEach(instruction => {
            const li = document.createElement('li');
            const p = document.createElement('p');

            p.innerHTML = instruction.replace(/\{amount:([\d\.]+):?([a-zA-Z]*)?\}/g, (match, amount, unit) => {
                const unitAttr = unit ? `data-unit="${unit}"` : '';
                // The text inside the span is what gets updated by recipe.js, so it should be just the amount and unit.
                return `<span class="instruction-amount" data-base="${amount}" ${unitAttr}>${amount}${unit || ''}</span>`;
            });

            li.appendChild(p);
            instructionsList.appendChild(li);
        });

    } else {
        document.querySelector('.recipe-title').textContent = "Recipe not found!";
    }
});
