const itemCounter = () => {
  const countAll = document.querySelectorAll('.mainItemContainer').length;
  const itemCounterContainer = document.querySelector('.itemCounterContainer');
  // itemCounterContainer.textContent = `Meals(${countAll})`;
  // itemCounterContainer.innerHTML = `Meals(${countAll})`;
  return `Meals(${countAll})`;
};
export default itemCounter;