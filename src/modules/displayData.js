import { addPopUpEvent } from './popup-details.js';

const display = (meal) => {
  const mealContainer = document.createElement('div');
  mealContainer.className = 'mainItemContainer';
  mealContainer.innerHTML = `
    <div class="itemContainer">
        <a class="itemImageContainer" href=""><img class="itemImage" src="${meal.strMealThumb}" alt="meal picture"></a>
        <div class="itemNameContainer">
          <h2 class="itemName">${meal.strMeal}</h2>
            <div class="likesContainer">
             <i class="fa-solid fa-heart heart"></i>
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

const fetchLikes = async () => {
  const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const response = await fetch(`${baseUrl}${process.env.APP_ID}/likes`);
  const data = await response.json();
  return data;
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
};
