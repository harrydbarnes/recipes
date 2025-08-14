document.addEventListener('DOMContentLoaded', () => {
    const servingSlider = document.getElementById('servings');
    if (!servingSlider) return; // Do nothing if there's no slider on the page

    const servingCount = document.getElementById('serving-count');
    const displayServings = document.getElementById('display-servings');
    let baseServings = parseInt(servingSlider.value, 10);

    // If view-recipe.js has set a global baseServings, use that.
    if (window.baseServings) {
        baseServings = window.baseServings;
    }

    function formatAmount(amount) {
        if (amount < 1 && amount > 0) {
            const eighths = Math.round(amount * 8);
            if (eighths === 0) return '0';
            if (eighths === 8) return '1';
            // Simple fraction representation
            if (eighths % 2 === 0) return `${eighths/2}/4`;
            if (eighths % 4 === 0) return `${eighths/4}/2`;
            return `${eighths}/8`;
        }
        if (amount >= 1 && amount < 10) {
            const rounded = Math.round(amount * 10) / 10;
            return rounded.toString();
        }
        return Math.round(amount).toString();
    }

    function updateServings() {
        const newServings = parseInt(servingSlider.value);
        const multiplier = newServings / baseServings;

        // Update serving display
        servingCount.textContent = newServings;
        displayServings.textContent = newServings;

        // Update ingredient and instruction amounts
        document.querySelectorAll('.ingredient-amount, .instruction-amount').forEach(element => {
            const baseAmount = parseFloat(element.dataset.base);
            const unit = element.dataset.unit || '';
            const newAmount = baseAmount * multiplier;

            element.textContent = `${formatAmount(newAmount)}${unit}`;
        });
    }

    servingSlider.addEventListener('input', updateServings);

    // Initial call to set amounts correctly if slider value is not the base.
    // updateServings();
});
