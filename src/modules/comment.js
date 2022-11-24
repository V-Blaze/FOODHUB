const commnentAPI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.APP_ID}/comments`;

export const fetchComments = async (id) => {
  try {
    const res = await fetch(`${commnentAPI}?item_id=${id}`);
    const data = await res.json();

    if (!res.ok) {
      return [];
    }
    return data;
  } catch (error) {
    return error;
  }
};

// eslint-disable-next-line
export const createCommentBubble = ({ creation_date, comment, username }) => {
// eslint-disable-next-line
  let creationDate = creation_date
  const commentDiv = document.createElement('div');
  commentDiv.className = 'comment-bubble';

  commentDiv.innerHTML = `
      <div class="txt">
          <p class="name">${username}</p>
          <p class="message">${comment}</p>
          <span class="timestamp">${creationDate}</span>
      </div>
      <div class="comment-arrow"></div>
    `;

  return commentDiv;
};

export const generateComments = async (id) =>{
  const commentWrapper = document.createElement('div');
  commentWrapper.className = 'comment-wrapper';
  commentWrapper.innerHTML = '';

  const comments = await fetchComments(id);
  if (comments.length <= 0) {
    const noCommentsSpan = document.createElement('span');
    noCommentsSpan.className = 'no-comment-span';
    noCommentsSpan.textContent = 'Be the first to comment ... ';
    commentWrapper.append(noCommentsSpan);
  } else {
    comments.forEach((commment) => {
      commentWrapper.append(createCommentBubble(commment));
    });
  }

  return commentWrapper

}


export const addNewComment = async (id, user, comment) => {

  const newComment = {
      "item_id": id,
      "username": user,
      "comment": comment
  }
  try {
      const res = await fetch(`${commnentAPI}`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newComment),
      })
      const data = await res.json()
      return data
  } catch (error) {
      return error
  }
}
