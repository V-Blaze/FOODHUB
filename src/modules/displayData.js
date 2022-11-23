import { addPopUpEvent } from './popup-details.js';

const displayData = async () => {
  const baseUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=American';
  await fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => {
      const { meals } = data;
      const homePageContainer = document.querySelector('.homePageContainer');
      homePageContainer.innerHTML = '';
      meals.map((item) => {
        homePageContainer.innerHTML += `<div class="mainItemContainer">
        <div class="itemContainer">
            <a class="itemImageContainer" href=""><img class="itemImage" src="${item.strMealThumb}" alt="meal picture"></a>
            <div class="itemNameContainer">
              <h2 class="itemName">${item.strMeal}</h2>
                <div class="likesContainer">
                 <i class="fa-solid fa-heart heart"></i>
                 <h4 class="likeCounter">5 likes</h4>
                </div>
            </div>
            <div class="commentButtonContainer">
            <button id="${item.idMeal}" type="button" class="commentsButton">Comments</button>
          </div>
          </div>
        </div>`;
        return 0;
      });
      addPopUpEvent();
    });
};

export default displayData;