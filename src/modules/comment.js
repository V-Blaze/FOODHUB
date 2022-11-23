const commnentAPI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.APP_ID}/comments`

export const fetchComments = async (id) => {
    try {
        const res = await fetch(`${commnentAPI}?item_id=${id}`)
        const data = await res.json()

        if(!res.ok) {
            console.log([])
            return []
        }
        console.log(data)
        return data
    } catch (error) {
        return error
    }
}

export const createCommentBubble = () => {
    let commentDiv = document.createElement('div');
    commentDiv.className = 'comment-bubble'
    commentDiv.innerHTML = `
      <div class="txt">
          <p class="name">Benni</p>
          <p class="message">Hey, check out this Pure CSS speech bubble...</p>
          <span class="timestamp">10:20 pm</span>
      </div>
      <div class="comment-arrow"></div>
    `
  
    return commentDiv
  }

// export const addComment = async (id) => {

//     const newComment = {
//         "item_id": id,
//         "username": "ada",
//         "comment": "Hello"
//     }
//     try {
//         const res = await fetch(`${commnentAPI}`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//               },
//               body: JSON.stringify(newComment),
//         })
//         console.log(res)
//         const data = await res.json()
//         console.log(data)
//     } catch (error) {
//         return error
//     }
// }