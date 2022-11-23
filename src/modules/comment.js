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
