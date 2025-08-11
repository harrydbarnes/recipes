const servingSlider = document.getElementById('servings');
const servingCount = document.getElementById('serving-count');
const displayServings = document.getElementById('display-servings');
const baseServings = 8; // Original recipe serves 8 people

function updateServings() {
    const newServings = parseInt(servingSlider.value);
    const multiplier = newServings / baseServings;

    // Update serving display
    servingCount.textContent = newServings;
    displayServings.textContent = newServings;

    // Update ingredient amounts
    document.querySelectorAll('.ingredient-amount').forEach(element => {
        const baseAmount = parseFloat(element.dataset.base);
        const newAmount = baseAmount * multiplier;

        // Format the amount nicely
        let formattedAmount;
        if (newAmount < 1 && newAmount > 0) {
            // For fractions less than 1
            formattedAmount = (Math.round(newAmount * 8) / 8).toString();
            if (formattedAmount === '0.125') formattedAmount = '1/8';
            else if (formattedAmount === '0.25') formattedAmount = '1/4';
            else if (formattedAmount === '0.375') formattedAmount = '3/8';
            else if (formattedAmount === '0.5') formattedAmount = '1/2';
            else if (formattedAmount === '0.625') formattedAmount = '5/8';
            else if (formattedAmount === '0.75') formattedAmount = '3/4';
            else if (formattedAmount === '0.875') formattedAmount = '7/8';
        } else if (newAmount >= 1 && newAmount < 10) {
            // For amounts 1-10, show one decimal if needed
            formattedAmount = (Math.round(newAmount * 10) / 10).toString();
            if (formattedAmount.endsWith('.0')) formattedAmount = Math.round(newAmount).toString();
        } else {
            // For larger amounts, round to whole numbers
            formattedAmount = Math.round(newAmount).toString();
        }

        // Get the emoji and unit from original text
        const originalText = element.innerHTML;
        const emoji = originalText.match(/^[^a-zA-Z0-9\s]+/)[0];
        const unit = originalText.replace(/^[^a-zA-Z0-9\s]+\s*[\d\/\.]+\s*/, '').trim();

        element.innerHTML = `${emoji} ${formattedAmount}${unit ? ' ' + unit : ''}`;
    });

    // Update instruction amounts
    document.querySelectorAll('.instruction-amount').forEach(element => {
        const baseAmount = parseFloat(element.dataset.base);
        const unit = element.dataset.unit || '';
        const newAmount = baseAmount * multiplier;

        let formattedAmount;
        if (newAmount < 1 && newAmount > 0) {
            formattedAmount = (Math.round(newAmount * 8) / 8).toString();
            if (formattedAmount === '0.125') formattedAmount = '1/8';
            else if (formattedAmount === '0.25') formattedAmount = '1/4';
            else if (formattedAmount === '0.375') formattedAmount = '3/8';
            else if (formattedAmount === '0.5') formattedAmount = '1/2';
            else if (formattedAmount === '0.625') formattedAmount = '5/8';
            else if (formattedAmount === '0.75') formattedAmount = '3/4';
            else if (formattedAmount === '0.875') formattedAmount = '7/8';
        } else if (newAmount >= 1 && newAmount < 10) {
            formattedAmount = (Math.round(newAmount * 10) / 10).toString();
            if (formattedAmount.endsWith('.0')) formattedAmount = Math.round(newAmount).toString();
        } else {
            formattedAmount = Math.round(newAmount).toString();
        }

        // Get the text before the amount from original
        const originalText = element.textContent;
        const prefix = originalText.split(/[\d\/\.]+/)[0];

        element.textContent = `${prefix}${formattedAmount}${unit}`;
    });
}

servingSlider.addEventListener('input', updateServings);
