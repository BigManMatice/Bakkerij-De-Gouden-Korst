function updateInputValue(button, input) {
  let currentValue = Number.parseInt(input.value, 10);

  if (Number.isNaN(currentValue)) {
    currentValue = 0;
  }

  if (button.classList.contains('plus')) {
    if (currentValue < 99) {
      currentValue++;
    }
  } else if (button.classList.contains('minus')) {
    if (currentValue > 0) {
      currentValue--;
    }
  }

  input.value = currentValue;
}

export function initSteppers() {
  document.addEventListener('click', (event) => {
    const button = event.target.closest('.qty-btn');

    if (!button) {
      return;
    }

    const stepperBox = button.closest('.stepper');
    const input = stepperBox?.querySelector('.qty-input');

    if (input) {
      updateInputValue(button, input);
    }
  });
}