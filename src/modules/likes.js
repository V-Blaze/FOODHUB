import fetchLikes from './fetchLikes.js';

const likeValueUpdate = async (idValue) => {
  const like = document.querySelector(`.like${idValue}`);
  const getLike = await fetchLikes();
  const index = getLike.findIndex((x) => x.item_id === idValue);
  const newLikeValue = getLike[index].likes;
  like.nextElementSibling.innerHTML = `${newLikeValue} Likes`;
};

export const updateLikeValue = async (idValue) => {
  const postData = {
    item_id: idValue,
  };
  const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  await fetch(`${baseUrl}${process.env.APP_ID}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });
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