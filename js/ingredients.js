document.addEventListener('DOMContentLoaded', () => {
    const ingredients = document.querySelectorAll('.ingredients-list li');

    ingredients.forEach(ingredient => {
        const checkbox = ingredient.querySelector('input[type="checkbox"]');
        const label = ingredient.querySelector('label');

        // Allow clicking the whole list item to toggle the checkbox
        ingredient.addEventListener('click', (e) => {
            // Prevent double-toggling if the label or checkbox itself is clicked
            if (e.target !== checkbox && e.target !== label) {
                checkbox.checked = !checkbox.checked;
                // Manually trigger change event for any other listeners
                checkbox.dispatchEvent(new Event('change'));
            }
        });

        // Also ensure clicking the label correctly toggles the checkbox
        if (label) {
            label.addEventListener('click', (e) => {
                // The 'for' attribute already handles the toggling, so we don't need extra logic here.
                // We just need to make sure our styling updates.
            });
        }
    });
});
