let counterDisplayElem = document.querySelector('.counter-display');
  let counterMinElem = document.querySelector('.counter-minus');
  let counterPlusElem = document.querySelector('.counter-plus');
  let counterReset = document.querySelector('.counter-reset');

  let count = 0;

  updateDisplay();

  counterPlusElem.addEventListener("click", () => {
    count++;
    updateDisplay();

  });

  counterMinElem.addEventListener("click", () => {
    count--;
    updateDisplay();

  });

  counterReset.addEventListener("click" , () => {
    count = 0;

    updateDisplay();

  });

  function updateDisplay() {

  counterDisplayElem.innerHTML = count;

  };