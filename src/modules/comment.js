const commnentAPI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.APP_ID}/comments`

export const fetchComments = async (id) => {
    try {
        const res = await fetch(`${commnentAPI}?item_id=${id}`)
        const data = await res.json()

        if(!res.ok) {
            console.log([])
            return []
        }
        return data
    } catch (error) {
        return error
    }
}

export const createCommentBubble = ({creation_date, comment, username}) => {
    let commentDiv = document.createElement('div');
    commentDiv.className = 'comment-bubble'
    commentDiv.innerHTML = `
      <div class="txt">
          <p class="name">${username}</p>
          <p class="message">${comment}</p>
          <span class="timestamp">${creation_date}</span>
      </div>
      <div class="comment-arrow"></div>
    `
  
    return commentDiv
  }

