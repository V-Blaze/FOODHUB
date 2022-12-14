import { addPopUpEvent } from './popup-details.js';
import { likesEvent } from './likes.js';
import fetchLikes from './fetchLikes.js';
import itemCounter from './itemCounter.js';

const display = (meal) => {
  const mealContainer = document.createElement('div');
  mealContainer.className = 'mainItemContainer';
  mealContainer.innerHTML = `
    <div class="itemContainer">
        <a class="itemImageContainer" href=""><img class="itemImage" src="${meal.strMealThumb}" alt="meal picture"></a>
        <div id="hello" class="itemNameContainer">
          <h2 class="itemName">${meal.strMeal}</h2>
            <div  class="likesContainer">
             <i class="fa-solid fa-heart heart like${meal.idMeal}"></i>
             <h4 class="likeCounter">${meal.likes} likes</h4>
            </div>
        </div>
        <div class="commentButtonContainer">
        <button id="${meal.idMeal}" type="button" class="commentsButton">Comments</button>
      </div>
      </div>`;
  return mealContainer;
};

const displayData = async () => {
  const baseUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=American';
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data.meals;
};

export const updateLikes = (newMealsArray) => {
  const updatedMealsArray = [];
  newMealsArray.forEach((meal) => {
    const existing = updatedMealsArray.filter((item) => item.idMeal === meal.item_id);
    if (existing.length) {
      const existingIndex = updatedMealsArray.indexOf(existing[0]);
      updatedMealsArray[existingIndex].likes = meal.likes;
    } else {
      updatedMealsArray.push(meal);
    }
  });
  return updatedMealsArray;
};

export const showMeals = async () => {
  const homePageContainer = document.querySelector('.homePageContainer');
  homePageContainer.innerHTML = '';
  const mealsArray = await displayData();
  mealsArray.forEach((meal) => {
    meal.likes = 0;
  });
  const likesArray = await fetchLikes();
  const newMealsArray = mealsArray.concat(likesArray);
  const updatedMealsArray = updateLikes(newMealsArray);
  updatedMealsArray.forEach((meal) => {
    homePageContainer.append(display(meal));
  });
  addPopUpEvent();
  likesEvent();
  itemCounter();
};
