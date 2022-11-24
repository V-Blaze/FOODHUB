const itemCounter = () => {
  const countAll = document.querySelectorAll('.mainItemContainer').length;
  const itemCounterContainer = document.querySelector('.itemCounterContainer');
  itemCounterContainer.innerHTML = `Meals(${countAll})`;
};
export default itemCounter;