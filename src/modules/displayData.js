import { addPopUpEvent } from './popup-details.js';



let newMealsArray=[];
let likesArray=[];

const display = (meal) => {
  // const homePageContainer = document.querySelector('.homePageContainer');
  // homePageContainer.innerHTML = '';
  // newMealsArray.map((item) => {
    const mealContainer= document.createElement('div');
    mealContainer.className = "mainItemContainer"
    mealContainer.innerHTML = `
    <div class="itemContainer">
        <a class="itemImageContainer" href=""><img class="itemImage" src="${meal.strMealThumb}" alt="meal picture"></a>
        <div class="itemNameContainer">
          <h2 class="itemName">${meal.strMeal}</h2>
            <div class="likesContainer">
             <i class="fa-solid fa-heart heart"></i>
             <h4 class="likeCounter">5 likes</h4>
            </div>
        </div>
        <div class="commentButtonContainer">
        <button id="${meal.idMeal}" type="button" class="commentsButton">Comments</button>
      </div>
      </div>`;
    return mealContainer;
  // });
}


const displayData = async () => {
  const baseUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=American';
  const response= await fetch(baseUrl) 
  const data = await response.json();
  // console.log(data.meals) 
  return data.meals;
  
    // .then((res) => res.json())
    // .then((data) => {
    //   return data.meals;
      // let mealsArray = data.meals;
      // mealsArray.forEach(element => {
      //   newMealsArray.push(element);
      // });
      
      // fetchLikes();
      // display();
      // addPopUpEvent();
    // });
};

const fetchLikes = async () => {
  const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
//  await fetch (`${baseUrl}${process.env.APP_ID}/likes`)
//  await fetch (`${baseUrl}DyyFn7Hy0lkWRXlkcSbQ/likes`)
  const response= await fetch(`${baseUrl}DyyFn7Hy0lkWRXlkcSbQ/likes`)
  const data = await response.json();
  return data;
    // .then((res) => res.json())
    // .then((data) => {
    //   return data;
    //   let likes = data;
      
    //   likes.forEach(element => {
    //     likesArray.push(element);
    //   });
    // });
};
const updateLikes = (newMealsArray) => {
  let updatedMealsArray = [];
  newMealsArray.forEach(meal => {
    let existing = updatedMealsArray.filter((item, index) => {
      return item.idMeal == item.item_id;
    }) 
    if (existing.length)
    {
      let existingIndex = updatedMealsArray.indexOf(existing[0]);
      updatedMealsArray[existingIndex].likes = meal.likes;
    }
    else {
      updatedMealsArray.push(meal);
    }
  })
  return updatedMealsArray;
}
export const  showMeals = async () => {
  const homePageContainer = document.querySelector('.homePageContainer');
  homePageContainer.innerHTML = '';
  let mealsArray = await displayData();
  mealsArray.forEach(meal => {
    meal.likes = 0;
  })  
  let likesArray = await fetchLikes();

  // console.log(fe)
  let newMealsArray = mealsArray.concat(likesArray);
  // console.log(newMealsArray);
  let updatedMealsArray = updateLikes(newMealsArray);
  console.log(updatedMealsArray);
  mealsArray.forEach(meal => {
    homePageContainer.append(display(meal));
  });
}
// console.log(likesArray);
// console.log(newMealsArray);
// export default displayData;