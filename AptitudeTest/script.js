document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (event) => {
            if (!validateForm(event.target)) {
                event.preventDefault();
            }
        });
    });
});

function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            alert(`${input.previousElementSibling.textContent} is required`);
        }
    });
    
    if (form.id === 'donation-form') {
        const amount = form.querySelector('#amount');
        if (amount.value <= 0) {
            isValid = false;
            alert('Please enter a valid donation amount');
        }
    }
    
    if (!isValid) {
        return false;
    }
    return true;
}
