/** @jest-environment jsdom */
import { constant } from 'lodash';
import itemCounter from '../modules/itemCounter.js';

describe('Count No of comments on the DOM', () => {
const item = document.querySelector('.menu-list');
console.log(item);
    const meals = [
    {
      strMeal: 'first meal Name',
      strMealThumb: 'https://',
      idMeal: '1',
      likes: 1,
    },
    {
        strMeal: 'second meal Name',
        strMealThumb: 'https://',
        idMeal: '2',
        likes: 1,
      },
      {
        strMeal: 'third meal Name',
        strMealThumb: 'https://',
        idMeal: '3',
        likes: 1,
      },
      {
        strMeal: 'fourth meal Name',
        strMealThumb: 'https://',
        idMeal: '4',
        likes: 1,
      },
      {
        strMeal: 'fifth meal Name',
        strMealThumb: 'https://',
        idMeal: '5',
        likes: 1,
      },
      {
        strMeal: 'sixth meal Name',
        strMealThumb: 'https://',
        idMeal: '6',
        likes: 1,
      },
      
  ];
  
  
document.body.innerHTML = `
<nav class="menu">
    <ul class="menu-list">
        <li class="list-item menuList"><a href="#">Home</a></li>
        <li class="list-item menuList"><a class="itemCounterContainer" href="#"></a></li>
    </ul>
</nav>
`;

  meals.map((meal) => {
  document.body.innerHTML += `<div class="mainItemContainer">
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
      </div>
      </div>`;
    return 0;
    
  });
  
  test('to check if number count is 6', () => {
    const itemCounterContainer = document.querySelector('.itemCounterContainer');
    itemCounter();
    let value = itemCounterContainer.textContent;
    expect(value).toBe('Meals(6)');
  });
});
