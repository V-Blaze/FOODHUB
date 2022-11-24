import { showMeals, fetchLikes } from "./displayData";

const likeValueUpdate = async (idValue) => {
    const like = document.querySelector(`.like${idValue}`);
    let getLike = await fetchLikes();
    let index = getLike.findIndex(x => x.item_id ===idValue);
    let newLikeValue = getLike[index].likes;
    console.log(newLikeValue);
    like.nextElementSibling.innerHTML = `${newLikeValue} Likes`;
};


const updateLikeValue = async (idValue) => {
    let postData = {
        "item_id": idValue
    }
        const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
        await fetch(`${baseUrl}${process.env.APP_ID}/likes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    })
     likeValueUpdate(idValue);
};


export const likesEvent = () => {
    const likesBtn = document.querySelectorAll('.heart');
    likesBtn.forEach((heart) => heart.addEventListener('click', (e) => {
      e.preventDefault();
      const idValue = heart.parentElement.parentElement.nextElementSibling.firstElementChild.getAttribute('id');
        updateLikeValue(idValue);
        
    }));
  };